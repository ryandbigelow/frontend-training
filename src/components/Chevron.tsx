import React, { HTMLAttributes, FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type ChevronProps = HTMLAttributes<HTMLDivElement> & {
  direction: 'up' | 'down'
  color: string
}

/* eslint-disable-next-line */
const Arrow = styled.div<ChevronProps>`
  width: 13px;
  height: 13px;
  display: inline-block;
  position: relative;
  span {
    top: 5px;
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${props => props.color};
    display: inline-block;
    transition: all 0.2s ease;
  }
  span:first-of-type {
    left: 0;
    transform: ${props =>
      props.direction === 'up' ? 'rotate(-45deg)' : 'rotate(45deg)'};
  }
  span:last-of-type {
    right: 0;
    transform: ${props =>
      props.direction === 'up' ? 'rotate(45deg)' : 'rotate(-45deg)'};
  }
`

export const Chevron: FunctionComponent<ChevronProps> = (
  chevronProps: ChevronProps
) => {
  const { color, direction } = chevronProps
  return (
    <Arrow color={color} direction={direction}>
      <span />
      <span />
    </Arrow>
  )
}
