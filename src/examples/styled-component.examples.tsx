import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import DynamicStyledComponent from '../components/styled-component/DynamicStyledComponent'
import StyledComponent from '../components/styled-component/StyledComponent'
import ThemedStyledComponent from '../components/styled-component/ThemedStyledComponent'

const DynamicStyledComponentExample = () => {
  const [color, setColor] = useState('red')
  return (
    <div>
      <DynamicStyledComponent backgroundColor={color} />
      <button
        type={'button'}
        onClick={() => {
          setColor('red')
        }}
      >
        red
      </button>
      <button
        type={'button'}
        onClick={() => {
          setColor('blue')
        }}
      >
        blue
      </button>
    </div>
  )
}

const light = {
  background: 'white',
  color: 'black'
}

const dark = {
  background: 'black',
  color: 'white'
}

const ThemedStyledComponentExample = () => {
  const [theme, setTheme] = useState(light)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ThemedStyledComponent theme={theme}>Theming</ThemedStyledComponent>
        <button
          type={'button'}
          onClick={() => {
            setTheme(light)
          }}
        >
          Light
        </button>
        <button
          type={'button'}
          onClick={() => {
            setTheme(dark)
          }}
        >
          Dark
        </button>
      </ThemeProvider>
    </div>
  )
}

storiesOf('Styled Components', module)
  .add('Basic', () => <StyledComponent />)
  .add('Dynamic', () => <DynamicStyledComponentExample />)
  .add('Themed', () => <ThemedStyledComponentExample />)
