import React from 'react'

const AllAlbums = (props) => {
    const albums = props.albums
    return (
        <div className='container'>
            <div id='albums' className='row '>
                <div className='album row'>
                    {albums.map(album => {
                        return (
                            
                                <div className='album'>
                                    <img src={album.artworkUrl} />
                                    <p>{album.name}</p>
                                    <small>{album.artist.name}</small>
                                </div>
                        )


                    })
                    }

                </div>
            </div>

        </div>
    )
}

export default AllAlbums