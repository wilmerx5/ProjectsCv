const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://wilmerx5:Akenosempai21.@api01.fbprbz0.mongodb.net/mern?retryWrites=true&w=majority")
.then(db=> console.log("is ok"))
.catch(err=>console.log(err))

module.exports = mongoose