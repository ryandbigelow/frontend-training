import styled from '@emotion/styled'

interface DynamicStyledComponentProps {
  backgroundColor: string
}

/**
 * Using the styled component API we can define input properties that can be used
 * to make dynamic styles for the component
 */
/* eslint-disable-next-line */
const DynamicStyledComponent = styled.div<DynamicStyledComponentProps>`
  height: 100px;
  width: 100px;
  background-color: ${props => props.backgroundColor};
`

export default DynamicStyledComponent
