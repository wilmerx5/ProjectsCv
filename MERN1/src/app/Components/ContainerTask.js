import React ,{ Component } from "react"



const ContainerTask = ({addTask,tasks,onDeleteItem, onEditItem ,id})=> {
   

return(<div className="container">
    <div className="row">
        <div className="col s5">
            <div className="card">
                <div className="card-content">
                    <form id ="formAdd" onSubmit={(e)=>{
                        e.preventDefault()
                        addTask(id)}}>
                        <div className="row">
                            <div className="input-field cols12">
                                <input id="tittle" required name ="tittle" type="text" placeholder="Task Tittle"></input>

                            </div>
                            <div className="input-field cols12">
                                <textarea id="description" required  name ="description" className="materialize-textarea"  placeholder="Task Desciption"></textarea>

                            </div>
                            <button id ="submitTask" type="submit" className="cols12 btn light-blue-darken-4">submit</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
        <div className="col s7">
            <table>
                <thead>
                    <tr>
                        <th>TITTLE</th>
                        <th>DESCRIPTION</th>
                        <th>DELETE</th>
                        <th>EDIT</th>

                       
                    </tr>
                </thead>
                <tbody>
                {tasks && tasks.length > 0 && Array.isArray(tasks[0]) ? (
                    tasks[0].map((e, index) => (
                                <tr key={tasks._id}>
                                <td>{e.tittle}</td>
                                <td>{e.description}</td>
                                <td><i  onClick={()=>{
                                    onDeleteItem(e._id)
                                }}className="material-icons waves-effect red-text darken-4"> delete</i></td>

                                <td><i  onClick={()=>{
                                    onEditItem(e._id)
                                }}className="material-icons waves-effect blue-text darken-4"> edit </i> </td>

                                </tr>
                                ))
                ) : console.log("jaja")}
                        
                </tbody>
            </table>
        </div>
    </div>

</div>
)}
export default ContainerTask