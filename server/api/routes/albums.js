const router = require('express').Router()
const {Album, Song, Artist} = require('../../db/index')

router.get('/', async(req,res,next) => {
    try{ 
        const allAlbums = await Album.findAll({
            include: [{ model : Artist }]
        });
        res.json(allAlbums)
    }catch(err){
        next(err)
    }
});

router.get('/:albumid', async(req,res,next) => {
    try{ 
        const albumId = req.params.albumid //has to match with the route request
        const albumById = await Album.findAll({
            where: {
                id: albumId
            },
            include: [{ model : Song} , { model: Artist}]
        })
        res.json(albumById)
    } catch(err){
        next(err)
    }
})


module.exports = router