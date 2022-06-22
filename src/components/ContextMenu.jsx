import React, { useEffect, useRef } from "react";

function ContextMenu(props) {
  const menu = useRef(null);

  const handleClick = (e) => {
    if (menu.current !== null) {
      if (!menu.current.contains(e.target)) {
        props.hideContext(false);
      }
    }
  };
  useEffect(() => {
    if (menu !== null) {
      document.addEventListener("click", handleClick);
      document.addEventListener("contextmenu", handleClick);
    }
    return function cleanUp() {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleClick);
    };
  });

  const style = {
    position: "absolute",
    top: props.contextMenu.getY,
    left: props.contextMenu.getX,
  };
  return (
    <article ref={menu} style={style}>
      <p>{props.contextMenu.text}</p>
      <div>
        <button onClick={(e) => props.hideContext(false, e)}>Edit</button>
        <button onClick={(e) => props.hideContext(false, e)}>Remove</button>
      </div>
    </article>
  );
}

export default ContextMenu;
