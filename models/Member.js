const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const memberSchema = new mongoose.Schema({
  firstName : {
    type: String,
    required : true
  }  ,
  lastName: {
    type : String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Member', bankSchema)