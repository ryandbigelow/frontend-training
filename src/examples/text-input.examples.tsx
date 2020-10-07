import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextInput } from '../components/inputs/TextInput'
import { ReactComponent as SearchIconSVG } from '../assets/search.svg'

storiesOf('Text input', module).add('empty', () => <TextInput />)

storiesOf('Text input', module).add('value', () => (
  <TextInput value={'Text Input'} />
))

storiesOf('Text input', module).add('placeholder', () => (
  <TextInput placeholder={'Placeholder'} />
))

storiesOf('Text input', module).add('label', () => (
  <TextInput placeholder={'Placeholder'}>Username</TextInput>
))

storiesOf('Text input', module).add('error', () => (
  <TextInput value={'Error'} error />
))

storiesOf('Text input', module).add('error with text', () => (
  <TextInput value={'Error'} error errorText={<>Invalid format</>} />
))

storiesOf('Text input', module).add('disabled', () => (
  <TextInput placeholder={'Text Input'} disabled />
))

storiesOf('Text input', module).add('icon', () => (
  <TextInput value={'Icon'} icon={SearchIconSVG} />
))

storiesOf('Text input', module).add('icon-disabled', () => (
  <TextInput value={'Icon'} icon={SearchIconSVG} disabled />
))
