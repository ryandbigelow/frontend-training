import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

/* eslint-disable-next-line */
export const Container = styled.button<{ backgroundColor: string }>`
  height: 100px;
  width: 100px;
  background-color: ${props => props.backgroundColor};
  border: none;
  outline: none;
`

/**
 * Simple react component that encapsulates behavior (clicking to change color) and text with the styled component
 */
export const BasicReactComponent: FunctionComponent = ()       => {
  const [color, setColor] = useState('red')
  const randomize = () => {
    setColor(`# ${Math.floor(Math.random() * 16777215).toString(16)}`)
  }
  return (
    <Container backgroundColor={color} onClick={randomize}>
      Click Me!
    </Container>
  )
}
