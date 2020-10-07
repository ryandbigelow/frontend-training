import { createAction, ActionsUnion } from '../../../state/action'

/* eslint-disable-next-line */
export enum ExampleActionTypes {
  INCREMENT = '[example] increment',
  DECREMENT = '[example] decrement',
  RESET = '[example] reset'
}

export const exampleActions = {
  increment: () => createAction(ExampleActionTypes.INCREMENT),
  decrement: () => createAction(ExampleActionTypes.DECREMENT),
  reset: () => createAction(ExampleActionTypes.RESET)
}

export type ExampleActions = ActionsUnion<typeof exampleActions>
