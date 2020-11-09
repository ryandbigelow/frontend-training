import React from 'react'
import useAxios from 'axios-hooks'
import { RandomCat, RandomCatComponent } from '../random-cat/RandomCatComponent'

export type CatBreedPageProps = {}



export const RandomCatPage: React.FunctionComponent<CatBreedPageProps> = (
  catBreedPageProps: CatBreedPageProps
) => {
  return (
    <div>
      {GetRandomCat()}
    </div>
  )
}

const GetRandomCat = () => {
  const [{ data, loading, error }] = useAxios({
    url: 'https://api.thecatapi.com/v1/images/search',
    method: 'GET',
    headers: {
      'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
    }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const randomCatData = data[0] as RandomCat
  return <RandomCatComponent  value={randomCatData}/>
}
