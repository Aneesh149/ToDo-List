import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [inputList1, setInputList1] = useState([]);

  const Items = (e) => {
    // console.log(e.target.value)
    setInputList(e.target.value);
  };

  const adding = () => {
    setInputList1((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setInputList1((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={Items}
            value={inputList}
          />
          <button onClick={adding}> + </button>

          <ol>
            {inputList1.map((inputVal, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={inputVal}
                  onSelect={deleteItems}
                />
              );
            })}
            {/* <li>{inputList}</li> */}
          </ol>
        </div>
      </div>
      <p className="pareek">Made by :- 🐐Aneesh Pareek🐐 </p>
    </>
  );
};

export default App;
