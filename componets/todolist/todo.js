import React,{Component} from "react";
class Todo extends React.Component{

  constructor (props){
    super(props);

    this.state ={
      todo : [],
      newtodo : "",
      editIndex: -1,
      editedTodo: ""

    };
  }

  addTodo = () =>{
const {todo, newtodo} = this.state;
if (newtodo.trim() !== ""){

  this.setState({
    todo : [...todo, newtodo],
    newtodo: ""
})
}
      
  }

  handelupdate = (index) =>{
    const {todo} = this.state;
  
    const updatetodo = todo.filter(( _, i) => i !== index)
  
    this.setState({ todo : updatetodo})
    }


    handleEditSave  =(index) => {
      const {todo, editedTodo } = this.state;
  
  const updatedTodos1 = todo.map((todos, i) => 
  i === index ?  editedTodo : todos );
   this.setState({ 
    todo: updatedTodos1,
    editIndex: -1,
    editedTodo:""
  
  }
   )
  
  
    }
  

    editem = index =>{
      this.setState(
        {
          editIndex: index,
          editedTodo:this.state.todo[index]
        }
      );
    }

  handleclick = event =>{
    this.setState(
      {
        newtodo : event.target.value 
      }
    
    )
  }
  
  
  
 render(){
  const {todo, newtodo, editedTodo} = this.state;
  return(

    <div id="bo">
     
    <h1>TODO list</h1><br/>
<input type="text"  id="tti" value={newtodo} onChange={this.handleclick} />
<button onClick={this.addTodo} id="addtodo">ADD</button><br/><br/>
 

      <ul class="col-sm-8">
      {todo.map((todo,index) =>(
<li key={index}  class="list-group-item d-flex justify-content-between align-items-center bro row  g-0 "><br/><br/>

{this.state.editIndex === index ? ( 
  <>
 
  <input class="edit col-sm-6 col-md-8" type="text" value={editedTodo} onChange={(e) => this.setState({editedTodo:e.target.value})}></input>
     <span class="col-4 col-md-2"><button class="savebut" onClick={ ()=> this.handleEditSave(index)}><i class="fa-regular fa-circle-check"></i></button></span> 
     
      </>
):(
  
< div class="dd">
<h6 class="col-sm-6 col-md-8">{todo}
   <span class="badge col-md-auto"><button onClick={() => this.handelupdate(index) } class="deletbut col-6 col-md-2"><i class="fa-solid fa-trash-can"></i></button></span> 
  <span class="badge1 col-4 col-md-2"><button  class="deletbut1 " onClick={() => this.editem(index)}><i class="fa-solid fa-pencil col"></i></button></span>
  </h6>
  </div>
   )}
  </li>
 
  ))}
    </ul>
    </div>

  );

 }

}
export default Todo;