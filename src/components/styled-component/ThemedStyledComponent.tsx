import styled from '@emotion/styled'

const ThemedStyledComponent = styled.div`
  font-size: 100px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  text-align: center;
`

export default ThemedStyledComponent
