import React from 'react'
import useAxios from 'axios-hooks'
import { CatBreed, CatBreedComponent } from './CatBreedComponent'

export type CatBreedPageProps = {}

export const CatBreedPage: React.FunctionComponent<CatBreedPageProps> = (
  catBreedPageProps: CatBreedPageProps
) => {
  const [{ data, loading, error }] = useAxios({
    url: 'https://api.thecatapi.com/v1/breeds',
    method: 'GET',
    headers: {
      'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
    }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const catBreeds = data as CatBreed[]
  return (
    <ul>
      {catBreeds.map((value: CatBreed) => {
        return (
          <li>
            <CatBreedComponent value={value} />
          </li>
        )
      })}
    </ul>
  )
}
