import React, { Component } from 'react';

// import style sheet to use
// use ./ because you have to go back out of the ToDoList.js file to get to ToDoList.css file
import "./ToDoList.css"

class App extends Component { // this is a class component, which is different from a functional components. class components have state, as seen in next. 

  // what is state? 
  // its an object that is meant to be changed, it doesn't stay the same all the time. 
  // everytime state changes, the component will re render (component is the file. this is a component. ToDoList.js is a file)
  state = {
    task: '', // set it to an empty string, this empty string will become each individual task we insert into the list
    taskList: [], // set to empty array, we will be adding tasks into this array 
  }

  // here is a function that changes the state whenever it's called. 
  // it takes an event, when something happens. like a bbq in july, an event. 
  handleTaskChange = (event) => {
    console.log(`You're entering in a value!`, event.target.value); // explain where event.target.value comes from  
    // if you want to clear console, just refresh at anytime. 
    this.setState({
      ...this.state.task, // the spread operator (...) allows you to add something new to the list, and retain the old ones. 
      task: event.target.value, // setting the state of task (line 13) to become the event value that comes from this function. 
    })
  }

  // ES6 function arrow function, research ES5 syntax if you'd like to learn more, but we'll be using ES6 javascript 
  // you can name functions whatever you want it to be, 
  // just make sure the name makes sense
  addTask = (event) => {
    // a form submission automatically refreshes, we don't want that to happen or we will lose data once it refreshes! 
    event.preventDefault(); 
    // test functionality with console.logs to see if it works 
    // must open DOM console to see it

    // if you don't see anything when clicking, make sure the fucntion name is correct
    // and you are writing the onClick event 
    console.log(`add task button clicked!`);

    // putting the new task into the task list array state (line 14)
    this.state.taskList.push(this.state.task); 

    // you can see your new state now
    console.log(`the task.`, this.state.task);
    console.log(`the task LIST.`, this.state.taskList);
    
    // clear task state  
    this.setState({
      task: '', // set task back to an empty string, but it's in the array. this is so that the input field will "refresh" back to empty so we can write new tasks. 
    })
  }

  deleteTask = (event) => {
    console.log(`You've clicked the delete button!`);
    console.log(event.target.value);



    // event.target.value is the index in this case since we've assigned it that way (line 79)
    // together, it's saying remove 1 element from the index, essentially the index itself. 
    this.state.taskList.splice(event.target.value, 1);    // the 1 means remove 1 element, what happens if we remove the 1? 
    console.log(`what is taskList?`, this.state.taskList)
    this.setState({ // we are setting the taskList state her to become what is left after deleting a task,
      // we don't want the array to still have the deleted ask, once it's been deleted. so we update task list state array 
      taskList: this.state.taskList, 
    })
  }

  test = (event) => {
    console.log(`testing something this.state.taskList`, this.state.taskList); 

    // console.logs are great to see what you are aiming to look at. so if you aren't sure what's happening where, whether it be a function or a variable or anything, just console.log
    // to see if you see what you're looking for, if it's not there, something's wrong! always check typos first... 
  }

  render() {

    let tasks = this.state.taskList; // initlize variable to hold our taskList array 
    let taskList = tasks.map((task, index)=> { // map out taskList, since it's an array, we can use .map and return individual iterations of each index 
      return (
        <div className="taskDiv" key={index}> {/* we need a unique key, indexes are unique since it's a particular digit space, use that. */}
            <li>                               {/* pay attention to your console, if the it keeps saying the "key" message try different elements within the .map */}
              {task} {/* in line 80 we alias each index of the tasks to be task, so we return the alias in one object since it's iterating. */}
              <button
              className="deleteTaskButton"
              value={index}
              onClick={this.deleteTask} /* with the onClick event, we are calling the deleteTask function from line 54 */
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
              {taskList} {/* we've mapped out taskList in 79-93, so we should we seeing one div, with a task and a delete button for everything task, in taskList */}
            </ol>

            <form onSubmit={this.addTask}> 
              <label>
                <input 
                className="taskInputField"
                onChange={this.handleTaskChange} /* this onChange event calls a function anytime it changes, open your console and type, what do you see?  */
                type="text"
                value={this.state.task}/> {/* the value of the text field will be task, once we click enter, the value will change task state, and go into task list state */}
              </label>
            </form>

            <button 
            onClick={this.addTask}
            className="addTaskButton"
            > Add Task </button>

            <br/> 
            <button onClick={this.test}> Test </button>

            <br/> 
            {/* test to see something on the screen, sometimes I use this instead of console.log, but it servres the same purpose. uncomment, what do you see? */}
            {/* {JSON.stringify(this.state.taskList)}
            {JSON.stringify(this.state.task)} */}
            </div>
      </div>
    );
  }
}

export default App;