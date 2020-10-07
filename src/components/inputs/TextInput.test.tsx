import React from 'react'
import { render } from '@testing-library/react'
import { TextInput } from './TextInput'

it('shallow renders without crashing', () => {
  const container = render(<TextInput />)
  expect(container).toHaveLength(1)
})

it('shallow renders without crashing (2)', () => {
  const container = render(<TextInput />)
  expect(container).toHaveLength(1)
})

it('shallow renders without crashing even with a placeholder', () => {
  const container = render(<TextInput placeholder="Search medications..." />)
  expect(container).toHaveLength(1)
})

it('shallow renders without crashing', () => {
  const container = render(
    <TextInput error placeholder="Search medications..." />
  )
  expect(container).toHaveLength(1)
})

it('shallow renders without crashing', () => {
  const container = render(
    <TextInput readOnly placeholder="Search medications..." />
  )
  expect(container.find({ readOnly: true })).toBeTruthy()
})
