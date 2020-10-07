import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioButton } from '../components/inputs/RadioButton'

storiesOf('RadioButton', module)
  .add('unselected', () => (
    <RadioButton
      option={{ value: 'testValue', label: 'Test label' }}
      onChange={() => {}}
    />
  ))
  .add('selected', () => (
    <RadioButton
      option={{ value: 'testValue', label: 'Test label' }}
      onChange={() => {}}
      checked
    />
  ))
  .add('disabled', () => (
    <RadioButton
      option={{ value: 'testValue', label: 'Test label' }}
      onChange={() => {}}
      disabled
    />
  ))
