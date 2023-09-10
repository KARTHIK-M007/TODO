import React, { Component } from 'react';

class Totos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editIndex: -1, 
      editedTodo: '' 
    };
    
  }

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: ''
      });
    }
  };

  handleDelete = (index) =>{
    const { todos  } = this.state;

    const updateTodo = todos.filter(( _, i ) => i !== index )

    this.setState({ todos: updateTodo})

  }

  handleEditSave  =(index) => {
    const {todos, editedTodo } = this.state;

const updatedTodos1 = todos.map((todo, i) => 
i === index ?  editedTodo : todo );
 this.setState({ 
  todos: updatedTodos1,
  editIndex:-1,
editedTodo:''

}
 )


  }

  editItem = (index) => {
    this.setState({
      editIndex: index,
      editedTodo: this.state.todos[index] 
    });
  }

  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  render() {
    const { todos, newTodo , editedTodo} = this.state;
    return (
      <div>
        <h2 style={{color:'yellow', fontSize:100}}>Todo List</h2>

      

<input type="text" value={newTodo} onChange={this.handleInputChange} />


        <button onClick={this.addTodo}>Add Todo</button>
       
        <ul>
  {todos.map((todo, index) => (
    <li key={index}>
     
     {this.state.editIndex === index ? (
      <>
      <input type='text' value={editedTodo} onChange={ (e) => this.setState({editedTodo:e.target.value})} />
    <button onClick={ ()=> this.handleEditSave(index)}> Save</button>

      </>
     ):(
      <>
  {todo}
   
   <button  onClick={()=> this.handleDelete(index) }>Delete</button>
    <button onClick={() => this.editItem(index)}>Edit</button>
                               

      </>
     )}
     </li>
))}
</ul>
      </div>
    );
  }
  
}
export default Totos;