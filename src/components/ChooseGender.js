import React from 'react'
import girl from './girl.png'
import boy from './boy.png'



export default function ChooseGender() {
   
    return (
        <div className="card-header" >
            <h1>Choose your Hostel</h1>
            <div className="card-container">
                <a style={{textDecoration:"none",color:"white"}} href="/hostel" className="card-girl">
                    <img src={girl} alt="girl" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>Girls Hostel</h3>
                </a>
                <a style={{textDecoration:"none",color:"white"}}href="/hostelB" className="card-boy">
                    <img src={boy} alt="boy" width="90rem" height="90rem" style={{marginTop:20}}></img>
                    <h3 style={{textDecoration:"none",color:"black"}}>Boys Hostel</h3>
                </a>
            </div>
        </div>
    )
}
