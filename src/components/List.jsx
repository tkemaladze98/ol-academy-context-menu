import React, { useState } from "react";
import ListItem from "./ListItem";
import "../styles/list.scss";
import ContextMenu from "./ContextMenu";
import DefaultArray from "../helpers/DefaultArray";

function List() {
  const [id, setId] = useState(null);
  const [contextMenu, setContextMenu] = useState({text:""});
  const [showContext, setShowContext] = useState(false);
  const array = DefaultArray;

  const clickedId = (id) => {
    setId(id);
  };

  const hideContext = (value, e) => {
    setShowContext(value);
    if (e !== undefined) {
      console.log(e.target.textContent);
    }
  };

  const contextIsShow = (text, getX, getY) => {
    setShowContext(true);
    setContextMenu({
      text: text,
      getX: getX,
      getY: getY,
    });
  };

  return (
    <div>
      {showContext && (
        <ContextMenu
          showContext={showContext}
          contextMenu={contextMenu}
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
