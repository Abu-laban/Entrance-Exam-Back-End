'use strict'

const User = require('./User')

function seed() {

    const tariq = new User({
        email: 'taariq.zyad@gmail.com',
        colors: [{
            name: 'Blue',
            img: "'blue",
        }]
    })
    tariq.save();
}

module.exports = seed;