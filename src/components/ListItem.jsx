import React, { useRef } from "react";

function ListItem(props) {
  const liText = useRef("");

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    props.clickedId(id);
    props.contextIsShow(liText.current.textContent,e.clientX,e.clientY)
  };

  const style = {
    backgroundColor: props.color,
    listStyle: "none",
    marginBottom: "15px",
  };

  return (
    <div className="li-parent-div">
      <li
        ref={liText}
        style={style}
        onContextMenu={(e) => handleContextMenu(e, props.id)}
      >
        Test Li Number {props.id}
      </li>
    </div>
  );
}

export default ListItem;
