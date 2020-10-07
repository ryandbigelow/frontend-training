import React, { FunctionComponent } from 'react'
import { ExampleState } from './state/state'
import { exampleActions } from './state/actions'
import { connectRedux, RoutedOM1ComponentProps } from '../../types'
import { withRouter } from '../../routing/WithRouter'

/**
 * And query parameters like search of filter that could be used to limit the result set of a server request
 */
interface UserViewQuery {
  search: string
}

/**
 * Any parameters that are part of the URL
 */
interface UserViewParams {
  id: string
}

export type UserViewComponentProps = RoutedOM1ComponentProps<
  UserViewQuery,
  UserViewParams,
  // State Interface
  ExampleState,
  // Action creators object
  typeof exampleActions
>

export const UserViewComponent: FunctionComponent<UserViewComponentProps> =
  /**
   * Because we are creating a routed component we now have a fourth parameter available to us: routing
   */
  ({ routing }) => {
    return (
      <div>
        <div>
          User ID:
          {
            /**
             * pathParams contains any URL path parameters like /user/:id where id would be
             * the path parameter corresponding to the id of the user being viewed
             */
            routing.pathParams.id
          }
        </div>
        <input
          placeholder="Search"
          value={routing.queryParams.search || ''}
          onChange={e => {
            routing.updateQuery({ search: e.target.value })
          }}
        />
      </div>
    )
  }

export function createUserView<TState extends { example: ExampleState }>() {
  return connectRedux(
    // The react component to connect to redux
    withRouter(UserViewComponent, { namespace: 'user' }),
    (state: TState) => state.example,
    exampleActions
  )
}

export type UserView = ReturnType<typeof createUserView>
