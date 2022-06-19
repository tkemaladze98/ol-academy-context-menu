import React, { useState } from "react";
import ListItem from "./ListItem";
import "../styles/list.scss";
import ContextMenu from "./ContextMenu";

function List() {
  const [id, setId] = useState(null);
  const [getX, setGetX] = useState(null);
  const [getY, setGetY] = useState(null);
  const [liText, setLiText] = useState("");
  const [showContext, setShowContext] = useState(false);
  const [array, setArray] = useState([
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "yellow",
    },
    {
      id: 4,
      color: "orange",
    },
    {
      id: 5,
      color: "green",
    },
  ]);

  const clickedId = (id) => {
    setId(id);
  };

  const hideContext = (value,e) => {
    setShowContext(value);
    if (e !== undefined) {
      console.log(e.target.textContent);
    }
  };

  const contextIsShow = (text, getX, getY) => {
    setShowContext(true);
    setLiText(text);
    setGetX(getX);
    setGetY(getY);
  };

  return (
    <div>
      {showContext && (
        <ContextMenu
          showContext={showContext}
          getX={getX}
          getY={getY}
          liText={liText}
          hideContext={hideContext}
        />
      )}

      <ul>
        {array.map((item) => (
          <ListItem
            key={item.id}
            color={item.color}
            handleClickedId={id}
            clickedId={clickedId}
            contextIsShow={contextIsShow}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
