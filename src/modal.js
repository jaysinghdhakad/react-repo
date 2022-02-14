import react from "react";
import "./modal.css";

export default function Modal() {
  return (
    <div className="container">
      <button className="close">X</button>
      <div className="modal">
        <div className="heading"> Add Members</div>
        <div className="subheading"> Name </div>
        <input className="input" type="text" />
        <div className="subheading"> Company</div>
        <input className="input" type="text" />
        <div className="subheading"> Status </div>
        <input className="input" type="text" />
        <div className="subheading"> Notes </div>
        <input className="input" type="text" />
        <div className="buttonbar">
          {" "}
          <button className="cancel">cancel</button>
          <button className="save">save</button>
        </div>
      </div>
    </div>
  );
}
