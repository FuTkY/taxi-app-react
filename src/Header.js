import React from "react";
import "./Header.css";
import Slika from "./slike/Logo.jpg"



function Header(){
    return(
        <div className="header">
            
            <ul>
            <img className="logo" src={Slika} alt=""/> 

            <input className="location" type="text" placeholder="Where are you headed?"></input>
            <a className="login-button" href="/">LOGIN</a>


            
            </ul>
            
        </div>
    )
    
}

export default Header;
