import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Theme } from '../../theme'

export interface TabNavigationItemProps {
  active?: boolean
}

/* eslint-disable-next-line */
const Container = styled.div<{ active?: boolean }>`
  position: relative;
  background: ${props =>
    props.active ? (props.theme as any).colors.blue200 : ''};
  border-radius: 3px;
  padding: 9px 12px;
  font-weight: ${props => (props.theme as any).fonts.weight.semibold};
  letter-spacing: 0.24px;
  font-size: 14px;
  line-height: 24px;
  color: ${props =>
    props.active
      ? (props.theme as any).colors.blue700
      : (props.theme as any).colors.neutral900};
`

const ActiveTabIndicator = styled.div`
  height: 2px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${props => (props.theme as Theme).colors.blue700};
  border-radius: 0px 0px 3px 3px;
`

export const TabNavigationItem: React.FunctionComponent<PropsWithChildren<
  TabNavigationItemProps
>> = (
  tabNavigationItemProps: React.PropsWithChildren<TabNavigationItemProps>
) => {
  const { active, children } = tabNavigationItemProps
  return (
    <Container active={active}>
      {children}
      {active && <ActiveTabIndicator />}
    </Container>
  )
}
