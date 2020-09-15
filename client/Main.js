import React from 'react'
import SideBar from './SideBar'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <SideBar/>
      </div>
    )
  }
}
