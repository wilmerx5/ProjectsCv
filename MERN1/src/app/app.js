import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import Nav from './Components/nav.js'
import ContainerTask from './Components/ContainerTask.js'




    



    
 const APP = ()=>{
    let [tasks,setTasks]= useState([])
    let [id,setId]= useState("")

    useEffect(() => {
        fetchTask();
        console.log("reestarting")
      }, []); 

     
      const fetchTask=()=>{

        fetch('/tasks')
        .then(res => res.json())
        .then(data => setTasks([data]))
    }
const addTask =async (id)=>{

        let form = document.getElementById('formAdd')
        let inputsub =document.getElementById('submitTask')
        let formData = new FormData(form)
        let data = Object.fromEntries(formData.entries())
       
       
    
        
        
        
        if(inputsub.value=="Edit"){
            fetch(`tasks/${id}`,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    "content-type":"application/json"
                }
               }).then(res=>res.json())
               .then(data=>{
                console.log(data)
                inputsub.value="Submit"
                inputsub.innerText="Submit"
               })
               .catch(err=>console.log(err))
            Swal.fire({
                title: "Task Edited!",
                icon: "success"
              })
        }
        else{
            const saved =await fetch("/tasks/add",{
                method:"post",
                body: JSON.stringify(data),
                headers:{
                    'Content-type':"application/json"
                }
            }).then(res=>res.json())
            .then(obj => {setTasks(prev => {
                prev[0].unshift(obj);
                return [...prev]; // Devolver un nuevo array para activar la actualización del estado
              })
              setId("")
            }
              )
            .catch(err=> console.log(err))
            Swal.fire({
                title: "Task Saved!",
                icon: "success"
              })
        }
       
        
        form.reset()
        fetchTask()
}

 const onDeleteItem =async(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`tasks/${id}`,{
                method:"DELETE"
        
            })
            .then(res=>res.json())
            .then(obj => setTasks(prev => {
                const updatedTasks = prev[0].filter(item => item._id !== id);
                
                return [updatedTasks];
              }))
            .catch(err=>console.log(err))
            
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

   
 }       
const onEditItem= async(id)=>{
    let inputTittle = document.getElementById('tittle')
    let inputDes = document.getElementById('description')
    let inputsub =document.getElementById('submitTask')


    fetch(`tasks/${id}`)
    .then(res=>res.json())
    .then(data=> {inputTittle.value = data.tittle 
        inputDes.value=data.description 
        inputsub.value="Edit"
        inputsub.innerText="Edit"
        setId(id)
    return data}
        )
    .catch(err=>console.log(err))

}
        return( <div>
           
          
                    <Nav></Nav>
                    <ContainerTask addTask={addTask} tasks={tasks} onDeleteItem={onDeleteItem}onEditItem={onEditItem} id={id} ></ContainerTask>

                </div>)}

 export default APP

