'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const server = express();

const axios = require('axios');
const mongoose = require('mongoose');

server.use(cors());
server.use(express.json());


const homeHandler = require('./modules/homeHandler')
const starHandler = require('./modules/starHandler')
const apiHandler = require('./modules/apiHandler')
const seedname = require('./modules/seed')
const dbHandlers = require('./modules/dbHandlers')

const PORT = process.env.PORT;

mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true });



//http://localhost:3001/
server.get('/', homeHandler);


//http://localhost:3001/apidata
server.get('/apidata', apiHandler);


// seedname()

//http://localhost:3001/get?email=
server.get('/get', dbHandlers.getHandler)

//http://localhost:3001/post
server.post('/post', dbHandlers.postHandler)

//http://localhost:3001/delete?email=
server.delete('/delete/:idx',dbHandlers.deleteHandler)

//http://localhost:3001/put
server.put('/put/:idx',dbHandlers.putHandler)



server.get('*', starHandler);

server.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
})