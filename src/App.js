import "./styles.css";
import Modal from "./modal";
import { useState } from "react";
export default function App() {
  const [show, setShow] = useState(false);
  function showModel() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <div className="App">
      <Modal />
      <div className="topbar">
        <div className="heading">Team Members</div>{" "}
        <button onClick={() => showModel()} className="addMembers">
          <span className="Heading">Add Members </span>{" "}
          <span className="add">+</span>
        </button>
      </div>
      <hr />
      <div className="table">
        <div className="item">
          <div className="blocks"> Name </div>
          <div className="blocks"> Company </div>
          <div className="blocks"> Status </div>
          <div className="blocks"> Last updated</div>
          <div className="block"> Notes </div>
        </div>
        <div className="list-items">
          <div className="basic"> ronny </div>
          <div className="basic"> ronny </div>
          <div className="basic"> ronny </div>
          <div className="basic"> ronny </div>
          <div className="basics">
            {" "}
            <div> ronny </div> <img className="icon" src="./delete.png" />{" "}
          </div>
        </div>
      </div>
      {/* <Modal/> */}
    </div>
  );
}
