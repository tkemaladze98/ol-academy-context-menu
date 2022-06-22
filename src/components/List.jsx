import React, { useState } from "react";
import ListItem from "./ListItem";
import "../styles/list.scss";
import ContextMenu from "./ContextMenu";
const ListData  = [
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
];

function List() {
  const [id, setId] = useState(null);
  const [contextMenu, setContextMenu] = useState({ text: "" });
  const [showContext, setShowContext] = useState(false);

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
        {ListData.map((item) => (
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
