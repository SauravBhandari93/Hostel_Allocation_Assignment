import React  from 'react'

export default function ChooseHostel() {
    let gender = "B";
    return (
        <div className="container-hostel">
            <div>
               <h2>Choose a Hostel</h2> 
            </div>
            <div className="hostel-grid">
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}1 </a></button>
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}2 </a></button>
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}3 </a></button>
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}4 </a></button>
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}5 </a></button>
            <button href="/room" className="hostel-button"><a style={{textDecoration:"none",color:"white"}}href="/room">{gender}6 </a></button>
            </div>
        </div>
    )
}
