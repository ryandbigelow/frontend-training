import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const TabNavigation: React.FunctionComponent<PropsWithChildren<{}>> = (tabNavigationProps: {
  children?: React.ReactNode
}) => {
  const { children } = tabNavigationProps
  return <Container>{children}</Container>
}

export default TabNavigation
