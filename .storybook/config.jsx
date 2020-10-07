import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import { css, Global } from '@emotion/core'
import { ThemeObj } from '../src/theme'
import emotionReset from 'emotion-reset'
import GlobalStyles from '../src/styles/global'
// automatically import all files ending in *.examples.js
const req = require.context('../src/examples', true, /.examples.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(storyFn => (
  <ThemeProvider theme={ThemeObj}>
    <Global
      styles={css`
        ${emotionReset}
        ${GlobalStyles}
      `}
    />
    {storyFn()}
  </ThemeProvider>
))

configure(loadStories, module)
