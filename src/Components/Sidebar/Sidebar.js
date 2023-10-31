import React, { useState } from "react";

import plusIcon from "../../assets/pluss.png";

import "./Sidebar.css";

function Sidebar(props){
  const colors = ["#eeb9c5", "#fdc7bb", "#ffda9e", "#fdfd96", "#b0f2c2", "#c7f6d4", "#d2f7ff", "#cae7e3"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
            />
          ))}
        </ul>
    </div>
  );
}

export default Sidebar;