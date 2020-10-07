import React, { FunctionComponent, InputHTMLAttributes, useState } from 'react'
import styled from '@emotion/styled'
import {
  BodySemiboldStyle,
  CaptionRegularStyle,
  BodyRegularStyle
} from '../../styles'
import { Theme } from '../../theme'

type InputProperties = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
>

export interface InputProps extends InputProperties {
  placeholder?: string
  icon?: React.ComponentType
  error?: boolean
  errorText?: React.ReactElement
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  fluid?: boolean
  iconToRight?: boolean
}

interface StyledInputProps {
  icon?: boolean
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  iconToRight?: boolean
}

const Container = styled.div`
  position: relative;
  display: flex;
`

/* eslint-disable-next-line */
const StyledLabel = styled.label<{ fluid?: boolean }>`
  ${BodySemiboldStyle};
  color: ${props => (props.theme as Theme).colors.neutral600};
  ${props => props.fluid && 'width: 100%'};
`

const StyledError = styled.span`
  ${CaptionRegularStyle};
  position: absolute;
  color: ${props => (props.theme as Theme).colors.red700};
  line-height: 15px;
  bottom: -15px;
`

/* eslint-disable-next-line */
const Input = styled.input<StyledInputProps>`
  ${BodyRegularStyle};
  height: 40px;
  min-width: 240px;
  max-width: 560px;
  width: 100%;
  border: ${props =>
    ((props.disabled || props.readOnly) &&
      `1px solid ${(props.theme as Theme).colors.neutral300}`) ||
    (props.error && `2px solid ${(props.theme as Theme).colors.red700}`) ||
    `1px solid ${(props.theme as Theme).colors.neutral400}`};
  background: ${props =>
    ((props.disabled || props.readOnly) &&
      (props.theme as Theme).colors.neutral200) ||
    'transparent'};
  box-sizing: border-box;
  border-radius: ${props => (props.theme as Theme).radius.pixel4};
  padding: ${props => (props.error ? '7px 15px' : '8px 16px')};
  ${props => props.icon && !props.iconToRight && 'padding-left: 48px'};
  ${props => props.icon && props.iconToRight && 'padding-right: 48px'};
  ${props =>
    props.disabled && `color: ${(props.theme as Theme).colors.neutral500}`};

  ::placeholder {
    color: ${props => (props.theme as Theme).colors.neutral500};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${props => (props.theme as Theme).colors.blue500};
    ${props => props.icon && !props.iconToRight && 'padding-left: 47px'};
    ${props => props.icon && props.iconToRight && 'padding-right: 47px'};
  }
`

export const TextInput: FunctionComponent<InputProps> = (
  textInputProps: React.PropsWithChildren<InputProps>
) => {
  const {
    placeholder,
    icon,
    iconToRight,
    error,
    errorText,
    children,
    value,
    fluid,
    disabled,
    onChange
  } = textInputProps
  const [inputText, setinputText] = useState(value || '')
  const StyledIcon = icon
    ? styled(icon)<{ disabled?: boolean }>`
        height: 16px;
        width: 16px;
        position: absolute;
        top: 12px;
        ${iconToRight ? 'right:16px' : 'left:16px'};
        color: ${props =>
          /* eslint-disable-next-line */
          props.disabled
            ? /* eslint-disable-next-line */
              (props.theme as Theme).colors.neutral500
            : /* eslint-disable-next-line */
              (props.theme as Theme).colors.neutral700};
      `
    : undefined
  return (
    <>
      <StyledLabel fluid={fluid}>
        {children}
        <Container>
          {StyledIcon && <StyledIcon disabled={disabled} />}
          <Input
            value={inputText}
            icon={!!icon}
            iconToRight={!!iconToRight}
            error={!!error}
            placeholder={placeholder}
            onChange={event => {
              if (onChange) {
                onChange(event)
              }
              setinputText(event.target.value)
            }}
          />
          {!!errorText && <StyledError>{errorText}</StyledError>}
        </Container>
      </StyledLabel>
    </>
  )
}
