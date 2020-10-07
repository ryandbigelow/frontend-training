/// <reference types="react-scripts" />

import React, { FunctionComponent, PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { ActionsObject } from '../state/action'

export interface Routing<T = {}, U = {}> {
  pathParams: Partial<U>
  queryParams: Partial<T>
  /**
   * The part of the url that matched this routed component. Useful for nested links.
   */
  matchUrl: string | null
  updateQuery: (update: Partial<T>) => void
}

export interface OM1ComponentProps<
  TState,
  TActions extends ActionsObject = {},
  TProps = {}
> {
  /**
   * The data managed by redux.
   *
   * Typically, we use the same interface describing a slice of the redux store
   * but you may use any interface that can be derived from the redux data
   */
  state: TState

  /**
   * The action creators object which will be passed directly to the
   * react-redux connect function (https://react-redux.js.org/api/connect#object-shorthand-form)
   */
  actions: TActions

  /**
   * The presentationl properties of the connected react component
   */
  props: TProps
}

export interface RoutedOM1ComponentProps<
  TQuery,
  TParams,
  TState,
  TActions extends ActionsObject = {},
  TProps = {}
> extends OM1ComponentProps<TState, TActions, TProps> {
  routing: Routing<TQuery, TParams>
}

export const connectRedux = <
  TAppState,
  TState,
  TActions extends ActionsObject,
  TProps
>(
  component: React.FunctionComponent<
    OM1ComponentProps<TState, TActions, TProps>
  >,
  selector: (state: TAppState) => TState,
  actions?: TActions
): FunctionComponent<TProps> =>
  connect(
    selector,
    actions,
    (stateProps, dispatchProps, ownProps: PropsWithChildren<TProps>) => {
      const { children, ...otherOwnProps } = ownProps
      return {
        children,
        props: otherOwnProps,
        actions: dispatchProps,
        state: stateProps
      }
    }
    // @ts-ignore
  )(component)

export interface DataFetchParams<Q, P = {}> {
  query: Partial<Q>
  path: Partial<P>
}
