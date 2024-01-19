const express = require('express')

const modelTask = require('../mongoMOdels/models')
const router = express.Router()

router.get('/',async(req,res)=>{
    
    const tasks = await modelTask.find()
    console.log(tasks)
    res.json(tasks)
})
router.get('/:id',async(req,res)=>{
    
    const task = await modelTask.findById(req.params.id)
    console.log(task)
    res.json(task)
})

router.post('/add',async(req,res)=>{
    
   const {tittle,description}=req.body
    const task = new modelTask ({tittle,description})
    const saved = await task.save()

    console.log(saved)
    console.log(req.body)
    res.json(saved)
})
router.put('/:id',async(req,res)=>{
    
    const {tittle,description}=req.body
     const taskEDitet = {tittle,description}
     const edited =await modelTask.findByIdAndUpdate(req.params.id, taskEDitet)
 
    
     console.log(req.params.id)
     res.json("ok")
 })
 router.delete('/:id',async(req,res)=>{
    

     const Deleted =await modelTask.findByIdAndDelete(req.params.id)
 
    
     console.log(Deleted)
     res.json("ok")
 })
module.exports = router