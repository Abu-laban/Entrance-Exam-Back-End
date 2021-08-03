'use strict'

const memory = require('./memory');
const axios = require('axios');

function apiHandler(req, res) {

    if (memory['colors'] !== undefined) {
        console.log('send from memory');
        res.status(200).send(memory['colors']);
    } else {

        axios.get('https://ltuc-asac-api.herokuapp.com/allColorData')
            .then(apidata => {
                console.log('send from API');
                let colorData = apidata.data.map(val => new Colors(val))

                memory['colors'] = colorData;
                res.status(200).send(colorData);

            }).catch(error => {
                console.error(error)
            })

    }

}

class Colors {
    constructor(obj) {
        this.name = obj.title;
        this.img = obj.imageUrl;
    }

}

module.exports = apiHandler;