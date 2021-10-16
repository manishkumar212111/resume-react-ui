import React, { useEffect, useState } from "react";
import "./index.scss";
let draggedId = "";
const Layout = (props) => {
  const [sample_map, setSampleMap] = useState(props.sample_map);

  console.log(props);

  const handleDrag = (e) => {
    console.log(e);
    draggedId = e.target.id;
  };

  const handleInActiveDrop = (e) => {
    console.log(e);
    if (e.target.id && sample_map[draggedId] && draggedId) {
      let field = {};
      field[draggedId] = false;
      setSampleMap((obj) => ({ ...obj, ...field }));
      setTimeout(() => {
        props.handleSidebar({ ...sample_map, ...field }, "sample_map");
      }, 10);
    }
  };

  const handleActiveDrop = (e) => {
    console.log(e);
    if (e.target.id && !sample_map[draggedId] && draggedId) {
      console.log(e.target.id, "in drop", sample_map[draggedId]);
      let field = {};
      field[draggedId] = true;
      setSampleMap((obj) => ({ ...obj, ...field }));
      setTimeout(() => {
        props.handleSidebar({ ...sample_map, ...field }, "sample_map");
      }, 10);
    }
  };
  const getData = (status) => {
    let h = [];
    for (var key in sample_map) {
      if (sample_map[key] == status) {
        h.push(
          <li
            id={key}
            draggable={true}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
          >
            {key}
          </li>
        );
      }
    }
    if (h.length == 0) {
      h.push(
        <span
          style={{ width: "250px", display: "inline-block" }}
          id={0}
          //draggable={true}
          onDragOver={(ev) => ev.preventDefault()}
          //onDragStart={handleDrag}
        >
          No {`${status ? "active" : "inactive"}`} elements here
        </span>
      );
    }
    return h;
  };

  return (
    <div className="row">
      {/* Active */}
      <div className="col-6">
        <div
          id="active"
          className="card active"
          onDragOver={(ev) => ev.preventDefault()}
          onDrop={handleActiveDrop}
        >
          <ul id="ul-active" className="card-body">
            {getData(true)}
          </ul>
        </div>
      </div>
      <div className="col-6">
        <div
          id="inactive"
          className="card inactive"
          onDrop={handleInActiveDrop}
          onDragOver={(ev) => ev.preventDefault()}
        >
          <ul id="ul-inactive" className="card-body">
            {getData(false)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
