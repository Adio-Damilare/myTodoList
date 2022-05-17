import {useState} from "react"
// const [myNumber,]=useState(0)
function App(){
  const[input,setInput]=useState("");
  const[todoArray,setTodoArray]=useState([]);
  const[addButton,setAddButton]=useState("Add");
  const[toDo,setToDo]=useState("TODO");
  const[editNumber,setEditNumber]=useState()
  const[errorDisplay,setErrorDisplay]=useState("")
 const parentBody={
   minHeight:"695px"
 }
const addTodo=()=>{
  if(toDo=="TODO" && addButton=="Add"){
    if(input==""){
      setErrorDisplay("The input field is empty")
    }
    else{
      let newTodo=input;
      let constructeTodo=[...todoArray,newTodo]
      setTodoArray(constructeTodo)
      setInput("") ;
      setErrorDisplay("")
    }
  }
  else{
    let editTodo= input;
    todoArray[editNumber]=editTodo;
    setTodoArray(todoArray);
    setInput("");
    setToDo("TODO");
    setAddButton("Add")

  }
}
const edit=(e)=>{
  setAddButton("Edit")
  setInput(todoArray[e]);
  setToDo("Edit Todo number "+(e+1) );
  setEditNumber(e);
}
const dele=(e)=>{
  let found= todoArray.filter((todos,index)=>(index!=e))
  setTodoArray(found)
}

const errorDesign={
  color:"red",
  textAlign:"center"
}
 const clearError=()=>{
  setErrorDisplay("")
 }
 const wordWrap={
   wordWrap:"wordBreak"
 }





  return(
    <div className="bg-dark" style={parentBody}>
      <div className="container bg-dark  ">
        <div>
          <div className="mx-lg-5 mx-md-4 pb-lg-5">
            <div className="mx-lg-5">
              <div className="mx-lg-5 mx-sm-0 mx-md-5">
                <div className="mx-lg-5 mx-sm-0 mx-md-5" >
                  <div className="mx-lg-5 mx-sm-0 mx-md-4">
                    <div className="mx-lg-5 mx-sm-0 mx-md-5 mx-sm-5 pt-lg-5 pt-md-4 pt-sm-4">
                      <div className="mx-lg-5 mx-sm-0 mx-md-4 pt-lg-5">
                        <div className="mx-lg-5 mx-sm-0 mx-md-5 pt-lg-5">
                          <div className="text-white text-center my-lg-1 mx-sm-5 fs-5">{toDo}</div>
                            <div className=" d-flex">
                              <input type="text" onMouseEnter={clearError} onChange={(event)=>setInput(event.target.value)}  className="form-control" value={input}/>
                              <button className="btn text-white border border-3 btn-block w-10 mx-1 btn-outline-primary" onClick={addTodo}>{addButton}</button>
                            </div>
                            <div style={errorDesign}>{errorDisplay}</div>

                          </div>
                        </div>
                        <div className="ms-lg-4 mt-md-5 m">
                        <div className="ms-lg-5 mt-md-5 m">
                        <table className=" table  border border-2 border-dark " >
                        {todoArray.length<1?
                          <tbody>
                                <tr className="text-center text-primary border pt-3 mt-4" >
                                  <td></td>
                                </tr>
                          </tbody>:
                        <tbody>
                          {todoArray.map((todo,index)=>(
                            <tr key={index} className="border ">
                              <td className="text-white">{index+1}</td>
                              <td className="text-white" style={wordWrap}>{todo}</td>
                              <td className="text-white">
                                <button className="btn text-white btn-warning me-2" onClick={()=>edit(index)}>Edit</button>
                                <button className="btn text-white btn-danger" onClick={()=>dele(index)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        }
                        </table>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
export default App;