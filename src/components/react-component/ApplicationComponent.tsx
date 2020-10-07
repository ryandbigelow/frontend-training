import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { ExampleState } from './state/state'
import { exampleActions } from './state/actions'
import { connectRedux, OM1ComponentProps } from '../../types'

export type ApplicationComponentProps = OM1ComponentProps<
  // State Interface
  ExampleState,
  // Action creators object
  typeof exampleActions,
  // Any presentational properties
  {
    fontSize: number
  }
>

/* eslint-disable-next-line */
const Counter = styled.span<{ fontSize: number }>`
  font-size: ${props => props.fontSize};
`

export const ApplicationComponent: FunctionComponent<ApplicationComponentProps> =
  /**
   * We use argument destructuring to pull out the pieces of the application component that we need.
   *
   * state: The application state from redux
   * actions: Action dispatchers that will dispatch the appropriate action to redux
   * props: Presentational properties for the component
   */
  ({ state, actions, props }) => {
    return (
      <div>
        The count is:
        <Counter fontSize={props.fontSize}>{state.count}</Counter>
        <button onClick={actions.increment} type={'button'}>
          Increment
        </button>
        <button onClick={actions.decrement} type={'button'}>
          Decrement
        </button>
        <button onClick={actions.reset} type={'button'}>
          Reset
        </button>
      </div>
    )
  }

/**
 * We export a creator function here to allow the same application component to be
 * initialized with different configuration (ex. tracking) and validate that the
 * main application state meets expectations
 */
export function createApplicationComponent<
  // Generics allow us to ensure the overall application state meets certain criteria without limiting this component to a single interface
  TState extends { example: ExampleState }
>() {
  return connectRedux(
    // The react component to connect to redux
    ApplicationComponent,
    // Map overall application state defined by generic TState to the state slices required by the login component
    (state: TState) => state.example,
    // Specify which actions to make available to the component and whether or not tracking should be enabled
    exampleActions
  )
}

export type Application = ReturnType<typeof createApplicationComponent>
