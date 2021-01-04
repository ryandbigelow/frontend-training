import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import TabNavigation from './components/navigation/TabNavigation'
import { TabNavigationItem } from './components/navigation/TabNavigationItem'
import { CatBreedPage } from './components/pages/cat-breeds/CatBreedPage'
import { FavoritesPage } from './components/pages/favorites/FavoritesPage'
import { ThemeObj } from './theme'

function App() {
  type Tab = 'HelloWorld' | 'CatBreeds' | 'Favorites'
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
            setActiveTab('Favorites')
          }}
        >
          <TabNavigationItem active={activeTab === 'Favorites'}>
            Random Cat
          </TabNavigationItem>
        </div>
      </TabNavigation>
      {activeTab === 'HelloWorld' && <>Hello World</>}
      {activeTab === 'CatBreeds' && <CatBreedPage />}
      {activeTab === 'Favorites' && <FavoritesPage />}
    </ThemeProvider>
  )
}

export default App
