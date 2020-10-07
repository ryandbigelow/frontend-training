import React from 'react'
import { render } from '@testing-library/react'

import TabNavigation from './TabNavigation'
import { TabNavigationItem } from './TabNavigationItem'

it('shallow renders without crashing', () => {
  const container = render(
    <TabNavigation>
      <TabNavigationItem active>Tab1</TabNavigationItem>
      <TabNavigationItem>Tab2</TabNavigationItem>
      <TabNavigationItem>Tab3</TabNavigationItem>
    </TabNavigation>
  )
  expect(container).toHaveLength(1)
})
