'use client'
import { useSyncExternalStore } from 'react'

// Общий стор «свободных мест» для Hero (счётчик срочности) и всплывающих плашек
// соц-доказательства. Каждая новая плашка уменьшает счётчик на 1, но не ниже FLOOR.
const START = 15 // старт: «15 из 100»
const FLOOR = 5 // мест всегда остаётся не меньше 5
export const SEATS_TOTAL = 100

let seats = START
const listeners = new Set<() => void>()

function emit() {
  for (const l of listeners) l()
}

// Списать одно место (вызывает плашка при появлении). Ниже FLOOR не уходит.
export function decrementSeat() {
  if (seats > FLOOR) {
    seats -= 1
    emit()
  }
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}

function getSnapshot() {
  return seats
}

function getServerSnapshot() {
  return START
}

// Хук чтения счётчика — реактивно обновляет UI при списании места.
export function useSeats() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
