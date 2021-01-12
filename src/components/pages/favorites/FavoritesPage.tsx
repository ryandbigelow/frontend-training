import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import axios from 'axios'
import styled from '@emotion/styled'
// Data returned from Cat API
const FavoritesContainer = styled.div`
  maxHeight: '25%',
  maxWidth: '50%',
  display: 'block',
  margin: 'auto'
`
interface CatData {
  breeds: []
  height: number
  id: string
  url: string
  width: number
}

interface FavoriteData {
  image: {
    id: string
    url: string
  }
}

const FavoritesPage: React.FunctionComponent = () => {
  return (
    <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
      <div
        style={{
          margin: 'auto',
          width: '80%',
          height: '90%',
          backgroundColor: 'wheat'
        }}
      >
        <CatView />
      </div>
    </div>
  )
}

const CatView: React.FunctionComponent = () => {
  type views = 'Favorite' | 'Random'
  const [currentView, setCurrentView] = useState<views>('Favorite')
  return (
    <>
      {currentView === 'Favorite' && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Favorite Cat</h1>
          <button type="button" onClick={() => setCurrentView('Random')}>
            Go to Cat Seletion
          </button>
          <FavoriteCatImages />
        </div>
      )}
      {currentView === 'Random' && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Pick your Favorite Cat</h1>
          <button type="button" onClick={() => setCurrentView('Favorite')}>
            Browse Favorites
          </button>
          <RandomCatImage />
        </div>
      )}
    </>
  )
}

const FavoriteCatImages: React.FunctionComponent = () => {
  const [{ data: favorites, loading: loadingFavorites }] = useAxios(
    {
      url: 'https://api.thecatapi.com/v1/favourites',
      method: 'GET',
      headers: {
        'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
      },
      params: {
        sub_id: 'test-user-1'
      }
    },
    { useCache: false }
  )

  const favs = favorites as FavoriteData[]
  return (
    <>
      {loadingFavorites && <div>loading</div>}
      {favorites && (
        <FavoritesContainer>
          {favs.map((fav: FavoriteData) => {
            return (
              <img
                key={fav.image.id}
                src={fav.image.url}
                alt={fav.image.id}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            )
          })}
        </FavoritesContainer>
      )}
    </>
  )
}

const RandomCatImage: React.FunctionComponent = () => {
  const [{ data, loading }, getData] = useAxios<CatData[]>(
    {
      url: 'https://api.thecatapi.com/v1/images/search',
      method: 'GET',
      headers: {
        'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
      }
    },
    { useCache: false }
  )
  return (
    <>
      {data && (
        <div
          style={{
            display: 'block',
            margin: 'auto'
          }}
        >
          <img
            src={data[0].url}
            alt={data[0].id}
            style={{ maxHeight: 200, margin: 'auto' }}
          />
          <div>
            <button type="button" onClick={() => getData()}>
              See Next Cat
            </button>
            <AddToFavoritesButton {...{ id: data[0].id }} />
          </div>
        </div>
      )}
      {loading && <div> loading </div>}
    </>
  )
}

interface ButtonProps {
  id: string
}

const AddToFavoritesButton: React.FunctionComponent<ButtonProps> = (
  props: ButtonProps
) => {
  const [addedToFavorites, setAddedToFavorites] = useState<boolean>(false)
  function addCatToFavorites() {
    axios({
      url: 'https://api.thecatapi.com/v1/favourites',
      method: 'POST',
      headers: {
        'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
      },
      data: {
        image_id: props.id,
        sub_id: 'test-user-1'
      }
    }).then(res => {
      if (res.status) setAddedToFavorites(true)
    })
  }

  const text = addedToFavorites ? 'Added to Favorites' : 'Add to Favorites'
  return (
    <button
      type="button"
      onClick={() => addCatToFavorites()}
      disabled={addedToFavorites}
    >
      {text}
    </button>
  )
}

export default FavoritesPage
