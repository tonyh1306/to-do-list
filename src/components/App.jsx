import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText.trim().length === 0) {
      return;
    }
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea toAdd={addItem} />
      <div>
        <ul>
          {items.map(
            (item, idx) =>
            (
                <ToDoItem
                  key={idx}
                  id={idx}
                  text={item}
                  onChecked={deleteItem}
                />
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
