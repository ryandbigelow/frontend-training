import React from 'react'
import styled from '@emotion/styled'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const HeaderContainer = styled.div`
  flex-basis: 56px;
  z-index: 3;
`

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
`
export const SidebarContainer = styled.div`
  flex-basis: 280px;
  z-index: 2;
`
export const ContentContainerStyle = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 12px;
`

const ScrollableContentContainer = styled.div`
  padding: 32px 0;
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const ContentContainer = (props: { children: React.ReactNode }) => {
  return (
    <ContentContainerStyle>
      <ScrollableContentContainer>{props.children}</ScrollableContentContainer>
    </ContentContainerStyle>
  )
}
