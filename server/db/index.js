const db = require('./db')
const Album = require('./Album')
const Artist = require('./Artist')
const Song = require('./Song')

Artist.hasMany(Song)
Album.hasMany(Song)
Artist.hasMany(Album)
Song.belongsTo(Album)
Song.belongsTo(Artist)
Album.belongsTo(Artist)

module.exports = {
  db,
  Album,
  Artist,
  Song
}
