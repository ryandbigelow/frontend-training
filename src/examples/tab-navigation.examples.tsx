import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import TabNavigation from '../components/navigation/TabNavigation'
import { TabNavigationItem } from '../components/navigation/TabNavigationItem'

storiesOf('TabNavigation', module).add('basic', () => (
  <TabNavigation>
    <TabNavigationItem active>Tab1</TabNavigationItem>
    <TabNavigationItem>Tab2</TabNavigationItem>
    <TabNavigationItem>Tab3</TabNavigationItem>
  </TabNavigation>
))

storiesOf('TabNavigation', module).add('interactive', () => {
  const [activeTab, setActiveTab] = useState<string>('1')
  return (
    <TabNavigation>
      <div
        role="button"
        onClick={() => {
          setActiveTab('1')
        }}
      >
        <TabNavigationItem active={activeTab === '1'}>Tab1</TabNavigationItem>
      </div>
      <div
        role="button"
        onClick={() => {
          setActiveTab('2')
        }}
      >
        <TabNavigationItem active={activeTab === '2'}>Tab2</TabNavigationItem>
      </div>
      <div
        role="button"
        onClick={() => {
          setActiveTab('3')
        }}
      >
        <TabNavigationItem active={activeTab === '3'}>Tab3</TabNavigationItem>
      </div>
    </TabNavigation>
  )
})
