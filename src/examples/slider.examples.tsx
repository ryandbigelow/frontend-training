import React from 'react'
import { storiesOf } from '@storybook/react'
import { Slider } from '../components/Slider'

storiesOf('Slider', module).add('default', () => {
  return (
    <Slider
      starValue={80}
      values={[25, 50, 75]}
      labels={['low', 'medium', 'high', 'very high']}
      colors={['red', 'orange', 'yellow', 'green']}
    />
  )
})
