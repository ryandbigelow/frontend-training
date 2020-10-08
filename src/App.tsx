import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import TabNavigation from './components/navigation/TabNavigation'
import { TabNavigationItem } from './components/navigation/TabNavigationItem'
import { CatBreedPage } from './components/pages/cat-breeds/CatBreedPage'
import { ThemeObj } from './theme'

function App() {
  type Tab = 'HelloWorld' | 'CatBreeds'
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
      </TabNavigation>
      {activeTab === 'HelloWorld' && <>Hello World</>}
      {activeTab === 'CatBreeds' && <CatBreedPage />}
    </ThemeProvider>
  )
}

export default App
