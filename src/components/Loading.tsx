import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { CSSTransition } from 'react-transition-group'

type SpinnerProps = {
  active?: boolean
  color: string
}

const transitionName = `spinner`

const EllipsisContainer = styled.div`
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  text-align: center;

  transition: opacity 0.3s;

  &.${transitionName}-enter {
    opacity: 0;
  }

  // enter to
  &.${transitionName}-enter-active {
    opacity: 1;
  }

  // exit from
  &.${transitionName}-exit {
    opacity: 1;
  }

  // exit to
  &.${transitionName}-exit-active {
    opacity: 0;
  }
`

const Bump = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: -7px;
  }
  50% {
    top: 8px;
  }
  75% {
    top: -10px;
  }
  100% {
    top: 0;
  }
`

/* eslint-disable-next-line */
const Ellipsis = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    position: relative;
    margin: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => props.theme.colors[props.color] || '#d32d27'};
  }
  div:nth-of-type(1) {
    animation-name: ${Bump};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 0.1s;
  }
  div:nth-of-type(2) {
    animation-name: ${Bump};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 0.3s;
  }
  div:nth-of-type(3) {
    animation-name: ${Bump};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
  }
  div:nth-of-type(4) {
    height: 38px;
    width: 4px;
    border-radius: 3px;
  }
`

function Loading(props: SpinnerProps) {
  return (
    <CSSTransition
      classNames={transitionName}
      timeout={500}
      in={props.active}
      unmountOnExit
    >
      {() => (
        <EllipsisContainer>
          <Ellipsis color={props.color}>
            <div />
            <div />
            <div />
            <div />
          </Ellipsis>
        </EllipsisContainer>
      )}
    </CSSTransition>
  )
}

export default Loading
