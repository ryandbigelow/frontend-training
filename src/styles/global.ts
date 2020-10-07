import { css } from '@emotion/core'
import { ThemeObj } from '../theme'

const GlobalStyles = css`
  *,
  body {
    font-family: ${ThemeObj.fonts.primary};
  }
  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  html,
  body {
    height: 100%;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`

export default GlobalStyles
