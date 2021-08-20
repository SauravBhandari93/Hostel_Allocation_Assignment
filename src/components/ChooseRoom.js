import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import close from "./close.jpg";

Modal.setAppElement("#root");

export default function ChooseRoom() {
  const [isOpen, setIsOpen] = useState(false);
  function showModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-room0" id="root2">
      <h3>Choose a Floor</h3>
      <select className="floor">
        <option>1st Floor</option>
        <option>2nd Floor</option>
        <option>3rd Floor</option>
        <option>4th Floor</option>
        <option>5th Floor</option>
      </select>
      <div className="container-room">
        <div className="room-grid">
          <button className="room-button">1</button>
          <button className="room-button">2</button>
          <button className="room-button">3</button>
          <button className="room-button">4</button>
          <button className="room-button">10</button>
          <button className="room-button hide"></button>
          <button className="room-button hide"></button>
          <button className="room-button">5</button>
          <button className="room-button">9</button>
          <button className="room-button">8</button>
          <button className="room-button">7</button>
          <button className="room-button">6</button>
        </div>
      </div>
      <div>
        <button className="book-room-button" onClick={showModal}>
          Book Room
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={showModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      > 
       <div>
        <div className="container-modal">
          <button onClick={showModal} className="button-close">
            <img src={close} alt="modalclose" height="20px" width="20px"></img>
          </button>
          <h1 style={{marginLeft:150}}>Success</h1>
          </div>
          <div style={{textAlign:"center"}}>
              Your room has been booked successfully.
          </div>
          <div style={{marginTop:10, marginLeft:10}} >
              Your room details are as follows:
          </div>
          <div style={{marginTop:20, marginLeft:10}}>
              Hostel No. {}
          </div>
          <div style={{marginTop:10, marginLeft:10}}>
              Room No. {}
          </div>
        </div>
      </Modal>
    </div>
  );
}
