const mongoose= require('mongoose')

const {Schema} =mongoose

const Taskschema= new Schema({
    tittle:{type:String, required:true},
    description:{type:String,required:true}
})

const modelTask = mongoose.model('Task',Taskschema)

module.exports = modelTask
