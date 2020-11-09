import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import TabNavigation from './components/navigation/TabNavigation'
import { TabNavigationItem } from './components/navigation/TabNavigationItem'
import { CatBreedPage } from './components/pages/cat-breeds/CatBreedPage'
import { RandomCatPage } from './components/pages/random-cat/RandomCatPage'
import { ThemeObj } from './theme'

function App() {
  type Tab = 'HelloWorld' | 'CatBreeds' | 'RandomCat'
  const [activeTab, setActiveTab] = useState<Tab>('HelloWorld')
  return (
    <ThemeProvider theme={ThemeObj}>
      <TabNavigation>
        <div
          role="button"
          onClick={() => {
            setActiveTab('HelloWorld')
          }}
        >
          <TabNavigationItem active={activeTab === 'HelloWorld'}>
            Hello World
          </TabNavigationItem>
        </div>

        <div
          role="button"
          onClick={() => {
            setActiveTab('CatBreeds')
          }}
        >
          <TabNavigationItem active={activeTab === 'CatBreeds'}>
            Cat Breeds
          </TabNavigationItem>
        </div>

        <div
          role="button"
          onClick={() => {
            setActiveTab('RandomCat')
          }}
        >
          <TabNavigationItem active={activeTab === 'RandomCat'}>
            Random Cat
          </TabNavigationItem>
        </div>
      </TabNavigation>
      {activeTab === 'HelloWorld' && <>Hello World</>}
      {activeTab === 'CatBreeds' && <CatBreedPage />}
      {activeTab === 'RandomCat' && <RandomCatPage />}
    </ThemeProvider>
  )
}

export default App
