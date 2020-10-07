import { render } from '@testing-library/react'
import React from 'react'
import { RadioButton } from './RadioButton'

it('shallow renders without crashing', () => {
  const container = render(
    <RadioButton
      option={{ value: 'test', label: 'test' }}
      onChange={() => {}}
    />
  )
  expect(container).toHaveLength(1)
})

it('shallow renders without crashing even with checked and disabled', () => {
  const container = render(
    <RadioButton
      option={{ value: 'test', label: 'test' }}
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
  expect(container).toHaveLength(1)
})
