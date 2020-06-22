import React, { useState } from "react";
import "./App.css";
import List from "./List";

const App = () => {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);
  const handleValue = e => {
    setValue(e.target.value);
  };
  const listHandle = () => {
    if (value !== "") {
      setItem(olditem => {
        return [...olditem, value];
      });
    }
    setValue("");
  };
  const deleteItems = id => {
    setItem(olditem => {
      return olditem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main">
        <div className="centerDiv">
          <h1>ToDo List</h1>
          <input
            type="text"
            value={value}
            placeholder="Add Items"
            onChange={handleValue}
          />
          <button onClick={listHandle}>+</button>
          <div>
            <ol>
              {item.map((c, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                    item={c}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
