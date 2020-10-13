import React, { CSSProperties } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'

const Spaced = styled.div`
  padding: 50px;
  cursor: default;
  width: 100%
  height: 100%
`

const Label = styled.div`
  margin-top: 10px;
  cursor: default !important;
  padding-top: 30px;
  margin-top: -20px;
`

const YouLabel = styled.p`
  font-weight: bold;
  margin-top: 10px;
  cursor: default !important;
  margin-top: -50px;
`

const SectionLabel = styled.p`
  font-style: italic;
  margin-top: 10px;
  cursor: default !important;
  padding-top: 40px;
  margin-top: -10px;
`

const star: CSSProperties = {
  background: 'gold',
  clipPath:
    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  display: 'inline-block',
  height: '50px',
  width: '50px',
  bottom: '-18px',
  cursor: 'default'
}

const tick: CSSProperties = {
  border: 0,
  borderRadius: 0,
  width: '8px',
  height: '35px',
  bottom: '-10px',
  backgroundColor: 'black',
  cursor: 'default',
  outline: 'none',
  boxShadow: 'none'
}

storiesOf('Slider', module).add('empty', () => {
  return (
    <Spaced>
      <Range
        dotStyle={{ display: 'none' }}
        value={[0, 25, 50, 75, 83, 100]}
        trackStyle={[
          { backgroundColor: 'red' },
          { backgroundColor: 'orange' },
          { backgroundColor: 'yellow' },
          { backgroundColor: 'green' },
          { backgroundColor: 'green' }
        ]}
        handleStyle={[tick, tick, tick, tick, star, tick]}
        marks={{
          0: <Label>0</Label>,
          12.5: <SectionLabel>Low</SectionLabel>,
          25: <Label>25</Label>,
          37.5: <SectionLabel>Medium</SectionLabel>,
          50: <Label>50</Label>,
          62.5: <SectionLabel>High</SectionLabel>,
          75: <Label>75</Label>,
          83: <YouLabel>You</YouLabel>,
          87.5: <SectionLabel>Very High</SectionLabel>,
          100: <Label>100</Label>
        }}
      />
    </Spaced>
  )
})
