const Sequelize = require('Sequelize');
const db = require('./db');

const Artist = db.define('artist', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Artist;