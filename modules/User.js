'use strict'

const mongoose = require('mongoose');

let colorSchema = new mongoose.Schema({

    name: String,
    img: String

  });

  let userSchema = new mongoose.Schema({

    email: String,
    colors: [colorSchema]

  });

  let User = mongoose.model("user", userSchema);

  module.exports = User;