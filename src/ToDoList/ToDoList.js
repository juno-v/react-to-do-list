import React, { Component } from 'react';

// import style sheet to use
import "./ToDoList.css"

class App extends Component {

  // what is state? 
  // its an object 
  state = {
    task: '', // set it to an empty string, this will become each individual task we put in
    taskList: [], // set to empty array, we will be adding tasks into this array 
  }

  // changing state without mutating 
  // explain immutable? 
  // it takes an event 
  // explain what a parameter is
  // explain what an event is 
  handleTaskChange = (event) => {
    console.log(`You're entering in a value!`, event.target.value); // explain where event.target.value comes from  
    // if you want to clear console, just refresh at anytime. 
    this.setState({
      ...this.state.task, // explain spread operator 
      task: event.target.value, 
    })
  }

  // ES6 function arrow function 
  // you can name functions whatever you want it to be, 
  // just make sure the name makes sense
  addTask = () => {
    // test functionality with console.logs to see if it works 
    // must open DOM console to see it

    // if you don't see anything when clicking, make sure the fucntion name is correct
    // and you are writing the onClick event 
    console.log(`add task button clicked!`);

    // putting the task into the task list array 
    this.state.taskList.push(this.state.task); 

    // you can see your new state now
    console.log(`the task.`, this.state.task);
    console.log(`the task LIST.`, this.state.taskList);
    
    // clear state 
    this.setState({
      task: '', // set it back to an empty string
    })
    
  }

  deleteTask = (event) => {
    console.log(`You've clicked the delete button!`);
    console.log(event.target.value);



    // event.target.value is the index 
    // the 1 means remove 1 element 
    // together, it's saying remove 1 element from the index, essentially the index itself. 
    this.state.taskList.splice(event.target.value, 1); 
    this.setState({
      taskList: this.state.taskList, 
    })
  }

  render() {

    let tasks = this.state.taskList;
    let taskList = tasks.map((task, index)=> {
      return (
        <div className="taskDiv" key={index}> 
            <li>
              {task}
              <button
              value={index}
              onClick={this.deleteTask}
              > Delete </button>
            </li>
        </div> 
      )
    }); 

    return (
      <div className="listContainer" >
        <h1> To Do List </h1>
            <div className="listDiv">

            <ol>
              {taskList}
            </ol>

            {/* make the value state, explain why */}
            <input 
            onChange={this.handleTaskChange}
            type="text" placeholder="task" value={this.state.task}/> 

            {/* have to write this.function name to refer to the function in this component */}
            <button onClick={this.addTask}> Add Task </button>

            <br/> 
            {/* test to see something */}
            {/* {JSON.stringify(this.state.taskList)} */}
            </div>
      </div>
    );
  }
}

export default App;