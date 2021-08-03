'use strict'

const User = require('./User')

const utilities = {};


utilities.getHandler = function (req, res) {

    let email = req.query.email;

    User.find({ email: email }, (error, userdata) => {
        if (error) {
            res.status(500).send('NOT FOUND')
        } else {

            res.status(200).send(userdata[0].colors)
        }
    })

}

utilities.postHandler = function (req, res) {

    let { email, name, img } = req.body;
    console.log(req.body);
    User.find({ email: email }, (error, userdata) => {
        if (error) {
            res.status(500).send('NOT FOUND')
        } else {

            userdata[0].colors.push({
                name:name,
                img:img,
            })
            userdata[0].save()
            res.status(200).send(userdata[0].colors)
        }
    })

}

utilities.deleteHandler = function (req, res) {

    let index = Number(req.params.idx);
    let email = req.query.email;
    
    User.find({ email: email }, (error, userdata) => {
        if (error) {
            res.status(500).send('NOT FOUND')
        } else {

            userdata[0].colors.splice(index,1);

            userdata[0].save()
            res.status(200).send(userdata[0].colors)
        }
    })

}



utilities.putHandler = function (req, res) {

    let index = Number(req.params.idx);
    let { email, name, img } = req.body;
    
    User.find({ email: email }, (error, userdata) => {
        if (error) {
            res.status(500).send('NOT FOUND')
        } else {

            userdata[0].colors.splice(index,1,{
                name:name,
                img:img,
            });
            
            userdata[0].save()
            res.status(200).send(userdata[0].colors)
        }
    })

}



module.exports = utilities;