import { ExampleState } from './state'
import { ExampleActions, ExampleActionTypes } from './actions'

const initialState: ExampleState = {
  count: 0
}

function exampleReducer(
  previousState: ExampleState | undefined,
  action: ExampleActions
): ExampleState {
  const state = previousState || initialState
  switch (action.type) {
    case ExampleActionTypes.INCREMENT: {
      return {
        count: state.count + 1
      }
    }
    case ExampleActionTypes.DECREMENT: {
      return {
        count: state.count - 1
      }
    }
    case ExampleActionTypes.RESET: {
      return initialState
    }
    default: {
      break
    }
  }
  return state
}

export default exampleReducer
