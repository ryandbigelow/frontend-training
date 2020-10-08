import React from 'react'

export type CatBreed = {
  adaptability: number
  affection_level: number
  alt_names: string
  cfa_url: string
  child_friendly: number
  country_code: string
  country_codes: string
  description: string
  dog_friendly: number
  energy_level: number
  experimental: number
  grooming: number
  hairless: number
  health_issues: number
  hypoallergenic: number
  id: string
  indoor: number
  intelligence: number
  lap: number
  life_span: string
  name: string
  natural: number
  origin: string
  rare: number
  rex: number
  shedding_level: number
  short_legs: number
  social_needs: number
  stranger_friendly: number
  suppressed_tail: number
  temperament: string
  vcahospitals_url: string
  vetstreet_url: string
  vocalisation: number
  weight: {
    imperial: string
    metric: string
  }
  wikipedia_url: string
}

export type CatBreedComponentProps = { value: CatBreed }

export const CatBreedComponent: React.FunctionComponent<CatBreedComponentProps> = (
  catBreedComponentProps: CatBreedComponentProps
) => {
  const { value } = catBreedComponentProps
  return <>{JSON.stringify(value.name)}</>
}
