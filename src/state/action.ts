import { ActionCreatorsMapObject } from 'redux'

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export function createAction<T extends string>(type: T): Action<T>
/* eslint-disable-next-line */
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>
/* eslint-disable-next-line */
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload }
}

export type ActionsObject = ActionCreatorsMapObject<Action<string>>

export type ActionsUnion<A extends ActionsObject> = ReturnType<A[keyof A]>

export type ActionByType<TAction, T extends string> = TAction extends Action<T>
  ? TAction
  : never
