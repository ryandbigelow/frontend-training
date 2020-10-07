import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../../theme'
import { BodyRegularStyle } from '../../styles'

export interface RadioButtonOption {
  value: string
  label: string
}

export interface RadioButtonProps {
  option: RadioButtonOption
  onChange: () => void
  checked?: boolean
  disabled?: boolean
}

const RadioButtonContainer = styled.label`
  position: relative;
  padding-left: 25px;
  margin-bottom: 5px;
  cursor: pointer;
`

const RadioButtonHidden = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

const RadioButtonCustom = styled.span`
  position: absolute;
  top: 3px;
  left: 0;
  height: 13px;
  width: 13px;
  border: 1px solid #3b70d4;
  background-color: white;
  border-radius: 50%;

  input:checked ~ & {
    background-color: white;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    background-color: #3b70d4;
  }

  input:checked ~ &:after {
    display: block;
  }

  &:after {
    top: 3px;
    left: 3px;
    width: 7px;
    height: 7px;
    border-radius: 4px;
    background: #3b70d4;
  }
`

const StyledText = styled.span`
  ${BodyRegularStyle};
  font-size: 14px;
  color: ${props => (props.theme as Theme).colors.neutral900};
`

export const RadioButton = (props: RadioButtonProps) => {
  const id = `RadioButtonDialog ${props.option.value}`
  const radioButtonValue = props.option.value

  let disabledStyle = {}
  if (props.disabled) {
    disabledStyle = { cursor: 'auto', opacity: '0.5' }
  }

  return (
    <RadioButtonContainer style={disabledStyle}>
      <StyledText>{props.option.label}</StyledText>
      <RadioButtonHidden
        type="radio"
        id={id}
        value={radioButtonValue}
        key={radioButtonValue}
        name="radioValue"
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <RadioButtonCustom />
    </RadioButtonContainer>
  )
}
