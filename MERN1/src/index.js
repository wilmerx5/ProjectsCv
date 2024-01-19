const express = require('express')
const morgan = require('morgan')
const path  = require('path')
const app = express()

const  {mongoose} = require('./db')
//settings

app.set('port',process.env.PORT||3000)

//middlewares

app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/tasks",require('./routes/routes'))


//Statics files
app.use(express.static(path.join(__dirname,'public')))

//Init server
app.listen(app.get('port'),()=>{

    console.log("app iniciada")
    console.log()
})
