import React from 'react'
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import { ActionsObject } from '../state/action'
import {
  DataFetchParams,
  OM1ComponentProps,
  RoutedOM1ComponentProps,
  Routing
} from '../types'

interface DataFetchAction<Q, P> {
  (params: DataFetchParams<Q, P>): unknown
}

export type DataFetchActionsObject<
  T extends string,
  TQuery,
  TParams
> = ActionsObject &
  {
    [P in T]: DataFetchAction<TQuery, TParams>
  }

export function withRouter<
  TQuery,
  TParams,
  /* eslint-disable-next-line */
  TFetchAction extends string & keyof TActions,
  TState,
  TActions extends DataFetchActionsObject<TFetchAction, TQuery, TParams>,
  TProps
>(
  Component: React.FunctionComponent<
    RoutedOM1ComponentProps<TQuery, TParams, TState, TActions, TProps>
  >,
  options?: Partial<{
    namespace: string
    dataFetchAction: TFetchAction | TFetchAction[]
  }>
) {
  const { namespace = undefined, dataFetchAction = undefined } = options || {}

  const WithRouter: React.FunctionComponent<OM1ComponentProps<
    TState,
    TActions,
    TProps
  >> = (
    withRouterProps: React.PropsWithChildren<
      OM1ComponentProps<TState, TActions, TProps>
    >
  ) => {
    const { actions, children, state, props } = withRouterProps
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch<TParams>()
    const matchUrl = match && match.url
    const urlSearchParams =
      namespace && new URLSearchParams(location.search).get(namespace)

    /**
     * Parse query params from location but only if the search
     * component changes
     */
    const queryParams = React.useMemo(() => {
      try {
        if (urlSearchParams) {
          return JSON.parse(Buffer.from(urlSearchParams, 'base64').toString())
        }
      } catch (e) {
        // continue regardless of error
      }
      return {}
    }, [urlSearchParams])

    /**
     * Memoize the url params so we know when to do a data fetch. useRouteMatch
     * returns a different object each time so we need to use an immutable
     * object like the match.url as the dependency defining when the pathParams
     * should be updated
     */
    const pathParams = React.useMemo(() => {
      if (match) {
        return match.params
      }
      return {}
      /* eslint-disable-next-line */
    }, [matchUrl])

    /**
     * Holds the information about a WithRouter component being rendered for the first time.
     * It's needed to determine wether we need to dispatch a DataFetchAction or not.
     */
    const firstUpdate = React.useRef(true)

    /**
     * If either the queryParams or pathParams changes we need to refresh our data
     * by issuing the data fetch action
     */
    React.useEffect(() => {
      if ((match && match.isExact) || firstUpdate.current) {
        firstUpdate.current = false
        if (dataFetchAction && !Array.isArray(dataFetchAction)) {
          const dispatchDataFetch = actions[dataFetchAction] as DataFetchAction<
            TQuery,
            TParams
          >
          dispatchDataFetch({ query: queryParams, path: pathParams })
        } else if (Array.isArray(dataFetchAction)) {
          dataFetchAction.forEach(action => {
            const dispatchDataFetch = actions[action] as DataFetchAction<
              TQuery,
              TParams
            >
            dispatchDataFetch({ query: queryParams, path: pathParams })
          })
        }
      }
    }, [actions, queryParams, pathParams, match])

    /**
     * Build routing object for child component
     */
    const routing: Routing<TQuery, TParams> = React.useMemo(() => {
      return {
        history,
        pathParams,
        queryParams,
        matchUrl,
        updateQuery: update => {
          if (namespace) {
            const namedSpacedUrlSearchParams = new URLSearchParams(
              location.search
            )
            const updatedQueryParams = {
              ...queryParams,
              ...update
            }
            const serializedQueryParams = JSON.stringify(updatedQueryParams)
            if (serializedQueryParams !== '{}') {
              namedSpacedUrlSearchParams.set(
                namespace,
                Buffer.from(serializedQueryParams).toString('base64')
              )
            } else {
              namedSpacedUrlSearchParams.delete(namespace)
            }

            history.replace(
              `${location.pathname}?${namedSpacedUrlSearchParams.toString()}`
            )
          }
        }
      }
    }, [
      pathParams,
      queryParams,
      matchUrl,
      location.pathname,
      location.search,
      history
    ])

    return (
      <Component
        routing={routing}
        actions={actions}
        state={state}
        props={props}
      >
        {children}
      </Component>
    )
  }

  return WithRouter
}
