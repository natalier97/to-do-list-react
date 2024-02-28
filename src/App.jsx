import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function addToList(event) {
    event.preventDefault();
    let toDoItem = document.createElement("li");
    let parentList = document.querySelector(".list");
    let user_input = document.getElementById("user_input");
    //setting list item to be the value of the user_input
    toDoItem.textContent = user_input.value;
    //resetting input field to be blank after a submit
    user_input.value = "";
    //appending list item to unordered list
    parentList.append(toDoItem);

    //adding a class to add strikethrough in CSS when list item is clicked
    toDoItem.addEventListener("click", () => toDoItem.classList.toggle("completed"));

    //creating delete item button
    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("id", "deleteButton")
    deleteButton.setAttribute("value", "delete")
    toDoItem.appendChild(deleteButton)

    //delete button functionality
    deleteButton.addEventListener("click", () => toDoItem.remove())
  }

  return (
    <>
      <h1>My To Do List</h1>
      <div className="form_container">
        <form onSubmit={addToList}>
          <input type="text" placeholder="add an item" id="user_input" />
          <input type="submit" value="Add to my list" id="submit_button" />
        </form>
      </div>

      <div className="list_container">
        <ul className="list"></ul>
      </div>
    </>
  );
}

export default App;
