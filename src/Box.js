import React from "react";

function Box({ color = "teal", height = 50, width = 50, id, handleRemove }) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        className="Box"
        id={id}
        style={{
          backgroundColor: color,
          height: `${height}px`,
          width: `${width}px`
        }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
