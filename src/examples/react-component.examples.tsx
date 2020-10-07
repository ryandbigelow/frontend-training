import React from 'react'
import { Provider } from 'react-redux'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import { combineReducers, createStore } from 'redux'
import { Route, MemoryRouter, useLocation, Link } from 'react-router-dom'
import {
  BasicReactComponent,
  createApplicationComponent,
  createUserView
} from '../components/react-component'
import exampleReducer from '../components/react-component/state/reducer'

storiesOf('React Components', module)
  .add('Basic', () => <BasicReactComponent />)
  .add('Connected', () => {
    const reducer = combineReducers({
      example: exampleReducer
    })
    const store = createStore(reducer, { example: { count: 0 } })
    const Application = createApplicationComponent()

    return (
      <Provider store={store}>
        <Application fontSize={20} />
      </Provider>
    )
  })
  .add('Routed', () => {
    const reducer = combineReducers({
      example: exampleReducer
    })
    const store = createStore(reducer, { example: { count: 0 } })
    const UserView = createUserView()

    const URL = () => {
      const location = useLocation()
      return (
        <div>
          Current URL:
          {`${location.pathname} ${location.search}`}
        </div>
      )
    }

    const StyledLink = styled(Link)`
      display: block;
    `

    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/user/2']}>
          <URL />
          <br />
          <div>Main Menu</div>
          <StyledLink to="/user/1">User 1</StyledLink>
          <StyledLink to="/user/2">User 2</StyledLink>
          <StyledLink to="/user/3">User 3</StyledLink>
          <br />
          <div>Routed Component:</div>
          <Route path="/user/:id">
            <UserView />
          </Route>
        </MemoryRouter>
      </Provider>
    )
  })
