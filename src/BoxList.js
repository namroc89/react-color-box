import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  const addBox = (box) => {
    setBoxList((boxList) => [...boxList, box]);
  };

  const remove = (id) => {
    setBoxList((boxes) => boxes.filter((box) => box.id !== id));
  };

  const renderBoxes = boxList.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      color={box.color}
      height={box.height}
      width={box.width}
      handleRemove={remove}
    />
  ));
  console.log(boxList);
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList">{renderBoxes}</div>
    </div>
  );
}

export default BoxList;
