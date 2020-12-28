import React, { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import axios from 'axios'
import { Interface } from 'readline'

// Data returned from Cat API

interface CatData {
  breeds: [];
  height: number;
  id: string;
  url: string;
  width: number;
};

interface FavoriteData {
  image: {
    id: string;
    url: string;
  }
};

export const RandomCatPage: React.FunctionComponent = () => {
  return(
    <div style={{backgroundColor:"black", width:"100%", height:"100%"}}>
      <div style={{margin:"auto", width:"80%", height:"90%", backgroundColor:"wheat"}}>
        <CatView/>
      </div>
    </div>  
  )

}

const CatView: React.FunctionComponent =() => {
  type views = 'Favorite' | 'Random'
  const [currentView, setCurrentView] = useState<views>("Favorite")
  if(currentView == "Favorite"){
    return(
      <div>
        <h1 style={{textAlign:"center"}}>Favorite Cat</h1>
        <button onClick={()=> setCurrentView("Random")}>Go to Cat Seletion</button>
        <FavoriteCatImages/>
      </div>  
    )
  }
  else if (currentView == "Random") {
    return(
      <div>
        <h1 style={{textAlign:"center"}}>Pick your Favorite Cat</h1>
        <button onClick={()=> setCurrentView("Favorite")}>Browse Favorites</button>
        <RandomCatImage/>
      </div>
    )
  }
  else return <div/>
}
const FavoriteCatImages: React.FunctionComponent = () => {
  const [{data: favorites, loading: loadingFavorites, error: errorFavorites}, getData] = useAxios({
    url: 'https://api.thecatapi.com/v1/favourites',
    method: 'GET',
    headers: {
      'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
    },
    params: {  
      "sub_id": "test-user-1"
    }
  })
  const favs = favorites as FavoriteData[]
  console.log(favs)
  if(favorites){
    return (
      <div style={{maxHeight: "25%", maxWidth: "50%", display:"block", margin:"auto"}}>
        {favs.map((fav: FavoriteData) => {
              return( 
                <img 
                  key={fav.image.id} 
                  src={fav.image.url} 
                  alt={fav.image.id} 
                  style={{maxWidth: "100%", maxHeight: "100%"}}
                />
              )
          })
        }
      </div>
    )
  }
  else return <div>loading</div>
}

const RandomCatImage: React.FunctionComponent = () => {
  const [{data, loading, error}, getData] = useAxios<CatData[]>({
    url: 'https://api.thecatapi.com/v1/images/search',
    method: 'GET',
    headers: {
      'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
    }
  })

  if(data){
    return (
      <div style={{maxHeight: "25%", maxWidth: "50%", display:"block", margin:"auto"}}>
        <img src={data[0].url} alt={data[0].id } onClick={() => getData()} style={{maxWidth: "100%", maxHeight: "100%"}}></img>
        <AddToFavoritesButton {...{id: data[0].id}}/>
      </div>
    )
  }
  else if(loading){
    return <div> loading </div>
  }
  else return <div>Error</div>
}

interface ButtonProps{
  id: string;
}
const AddToFavoritesButton: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const [addedToFavorites, setAddedToFavorites] = useState<boolean>(false)
  function addCatToFavorites(){
    axios({
      url: 'https://api.thecatapi.com/v1/favourites',
      method: 'POST',
      headers: {
        'x-api-key': '2606fdf1-086c-48db-a667-a4c1047d3433'
      },
      data: {
        "image_id": props.id,
        "sub_id": "test-user-1"
      }
    }).then((res)=>{
      if(res.status) setAddedToFavorites(true)
    })
  }
  const text = (addedToFavorites) ? "Added to Favorites" :"Add to Favorites";
  return( 
    <button 
      onClick={()=> addCatToFavorites()} 
      disabled={addedToFavorites}
    >
      {text}
    </button>
  )
}
