import React from 'react'
import SideBar from './SideBar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import Axios from 'axios'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums : []
    }
  }
  async componentDidMount() {
    try {
      const response = await Axios.get('/api/albums');
      const albums = response.data;
      this.setState({
        albums: albums
      });
    } catch (error) {
      console.log('There was a problem loading the albums');
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
