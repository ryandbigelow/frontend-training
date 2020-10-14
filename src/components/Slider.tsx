import React, { CSSProperties, FunctionComponent } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from '@emotion/styled'

const Spaced = styled.div`
  padding: 50px;
  cursor: default;
  width: 100%
  height: 100%
`

const TickLabel = styled.div`
  margin-top: 10px;
  cursor: default !important;
  padding-top: 30px;
  margin-top: -20px;
`

const StarLabel = styled.p`
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
  borderRadius: 5,
  width: '4px',
  height: '35px',
  bottom: '-10px',
  backgroundColor: 'black',
  cursor: 'default',
  outline: 'none',
  boxShadow: 'none'
}

export type BackgroundColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'black'

export type RangeValueType = 'tick' | 'star' | 'label'

export type SliderTrackColorMap = { [key: number]: BackgroundColor }

export type SliderProps = {
  values: number[]
  starValue: number
  labels: string[]
  colors: BackgroundColor[]
}

export const Slider: FunctionComponent<SliderProps> = (
  sliderProps: SliderProps
) => {
  // Input Props
  const { values, starValue, labels, colors } = sliderProps

  // Component State
  const [rangeValues, setRangeValues] = React.useState<
    { number: number; type: RangeValueType }[]
  >([])
  const [trackStyles, setTrackStyles] = React.useState<React.CSSProperties[]>(
    []
  )
  const [styles, setStyles] = React.useState<React.CSSProperties[]>([])
  const [marks, setMarks] = React.useState<Record<number, React.ReactNode>>([])

  // Build Range Values
  React.useEffect(() => {
    let newRangeValues: { number: number; type: RangeValueType }[] = values.map(
      (value: number) => {
        return { number: value, type: 'tick' }
      }
    )
    newRangeValues.push({ number: 0, type: 'tick' })
    newRangeValues.push({ number: 100, type: 'tick' })
    newRangeValues.push({ number: starValue, type: 'star' })
    newRangeValues = newRangeValues.sort((n1, n2) => n1.number - n2.number)
    setRangeValues(newRangeValues)
  }, [values, starValue, setRangeValues])

  // Build Track Styles
  React.useEffect(() => {
    const newTrackStyles: React.CSSProperties[] = []
    rangeValues.forEach(
      (value: { number: number; type: RangeValueType }, index: number) => {
        let newColor = ''
        switch (value.type) {
          case 'tick':
            newColor = colors[index]
            break
          case 'label':
            newColor = colors[index]
            break
          case 'star':
            newColor = colors[index - 1]
            colors.splice(index, 0, colors[index - 1])
            break
          default:
            break
        }
        newTrackStyles.push({ backgroundColor: newColor })
      }
    )
    setTrackStyles(newTrackStyles)
  }, [rangeValues, colors, setTrackStyles])

  // Build Styles
  React.useEffect(() => {
    const newStyles: React.CSSProperties[] = []
    rangeValues.forEach(
      (value: { number: number; type: RangeValueType }, index: number) => {
        switch (value.type) {
          case 'tick':
            newStyles.push(tick)
            break
          case 'star':
            newStyles.push(star)
            break
          default:
            break
        }
        setStyles(newStyles)
      }
    )
  }, [rangeValues, setStyles])

  // Build Marks
  React.useEffect(() => {
    const newMarks: Record<number, React.ReactNode> = {}
    rangeValues.forEach(
      (value: { number: number; type: RangeValueType }, index) => {
        switch (value.type) {
          case 'tick':
            newMarks[value.number] = <TickLabel>{value.number}</TickLabel>
            break
          case 'label':
            newMarks[value.number] = (
              <SectionLabel>{labels[index]}</SectionLabel>
            )
            break
          case 'star':
            newMarks[value.number] = <StarLabel>{value.number}</StarLabel>
            break
          default:
            break
        }
      }
    )
    setMarks(newMarks)
  }, [rangeValues, labels, setMarks])

  return (
    <Spaced>
      <Range
        dotStyle={{ display: 'none' }}
        value={rangeValues.map(value => value.number)}
        trackStyle={trackStyles}
        handleStyle={styles}
        marks={marks}
      />
    </Spaced>
  )
}
