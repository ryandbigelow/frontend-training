import React from 'react'

export type RandomCat = {
    breeds: []
    height: number
    id: string
    url: string
    width: number
}

export type RandomCatComponentProps = { value: RandomCat }

export const RandomCatComponent: React.FunctionComponent<RandomCatComponentProps> = (
  randomCatComponentProps: RandomCatComponentProps
) => {
  const { value } = randomCatComponentProps
  console.log("TEst")
  console.log(value)
  return <img src={value.url} alt={value.id}></img>
}
