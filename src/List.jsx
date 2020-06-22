import React from "react";
import "./App.css";

const List = props => {
  return (
    <>
      <div className="minusDiv">
        <button
          onClick={() => {
            return props.onSelect(props.id);
          }}
          id="minusBtn"
        >
          -
        </button>
        <li>{props.item}</li>
      </div>
    </>
  );
};

export default List;
