import React from 'react'
import SideBar from './SideBar'
import Player from './Player'
import AllAlbums from './AllAlbums'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums : [
        {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        },
        {
          "id": 2,
          "name": "I React to State",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        }
      
      ]
    }
  }
  render () {
    return (
      <div id='main' className='row container'>
        <SideBar/>
        <Player />
        <AllAlbums albums = {this.state.albums}/>
      </div>
    )
  }
}
