'use strict'

function homeHandler(req, res) {

    res.status(200).send('Hello this is home root')
}

module.exports = homeHandler;