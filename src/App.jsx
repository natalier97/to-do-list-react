import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import tasksData from "./data/tasks.json";

function App() {
  //setting usestate variables
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskInput, setNewTaskInput] = useState("");

  //keeping track of what is in input box and showing it on the browser (continuosly updating 'newTaskInput' variable with what's in the input box)
  function addingTask(event) {
    setNewTaskInput(event.target.value);
  }

  function deletingTaskHandler(taskToDelete) {
    setTasks(tasks.filter((task) => task.id != taskToDelete.id));
  }

  //adding new Task to TODO list
  const addTaskHandler = (event) => {
    event.preventDefault();
    console.log("add task");
    const newTask = {
      id: tasks.length + 1,
      task: newTaskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  //formatting the tasks to look how we want it to look
  const renderTask = (task) => {
    return `ID: ${task.id}, ${task.task}, COMPLETED: ${
      task.completed ? "Yes" : "No"
    }`;
  };

  return (
    <>
      <h1>My To Do List</h1>
      <div className="form_container">
        <form>
          <input
            type="text"
            placeholder="add an item"
            id="user_input"
            onChange={addingTask}
            value={newTaskInput}
          />
          <button onClick={addTaskHandler}>Add Example New Task</button>
        </form>
      </div>

      <div className="list_container">
        <ul className="list">
          {tasks.map((task, i) => (
            <span>
              <li key={i}>{renderTask(task)}</li>
              <button onClick={() => deletingTaskHandler(task)}>delete</button>
            </span>
          ))}
        </ul>
        {/* <button onClick={addTaskHandler}>Add Example New Task</button> */}
      </div>
    </>
  );
}

export default App;

// function App() {
//   function addToList(event) {
//     event.preventDefault();
//     let toDoItem = document.createElement("li");
//     let parentList = document.querySelector(".list");
//     let user_input = document.getElementById("user_input");
//     //setting list item to be the value of the user_input
//     toDoItem.textContent = user_input.value;
//     //resetting input field to be blank after a submit
//     user_input.value = "";
//     //appending list item to unordered list
//     parentList.append(toDoItem);

//     //adding a class to add strikethrough in CSS when list item is clicked
//     toDoItem.addEventListener("click", () =>
//       toDoItem.classList.toggle("completed")
//     );

//     //creating delete item button
//     let deleteButton = document.createElement("button");
//     deleteButton.setAttribute("id", "deleteButton");
//     deleteButton.setAttribute("value", "delete");
//     toDoItem.appendChild(deleteButton);

//     //delete button functionality
//     deleteButton.addEventListener("click", () => toDoItem.remove());
//   }

//   return (
//     <>
//       <h1>My To Do List</h1>
//       <div className="form_container">
//         <form onSubmit={addToList}>
//           <input type="text" placeholder="add an item" id="user_input" />
//           <input type="submit" value="Add to my list" id="submit_button" />
//         </form>
//       </div>

//       <div className="list_container">
//         <ul className="list"></ul>
//       </div>
//     </>
//   );
// }
