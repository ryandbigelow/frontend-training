import styled from '@emotion/styled'
import { BodySemiboldStyle } from '../styles'
import { Theme } from '../theme'

export interface TextButtonProps {
  blue?: boolean
  red?: boolean
}

/* eslint-disable-next-line */
export const TextButton = styled.button<TextButtonProps>`
  ${BodySemiboldStyle}
  border: none;
  background: none;
  text-decoration: none;
  text-transform: none;
  outline: none;
  color: ${props =>
    (props.blue && (props.theme as Theme).colors.blue700) ||
    (props.red && (props.theme as Theme).colors.red700) ||
    (props.theme as Theme).colors.neutral700};

  cursor: pointer;
  &:hover {
    color: ${props => (props.theme as Theme).colors.blue800};
  }
  &:focus {
    color: ${props => (props.theme as Theme).colors.neutral700};
  }
  &:disabled {
    color: ${props => (props.theme as Theme).colors.neutral500};
  }
  &:active {
    color: ${props => (props.theme as Theme).colors.neutral700};
  }
`
