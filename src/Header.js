import React from 'react'
import Logo from "./slike/Logo.jpg"
//import User from "./slike/User.png"


function Header() {
  return (
    <div className='header'>
      <img src={Logo}></img>
      <input type="text"></input>
      <button>LOGIN</button>
    </div>
  )
}

export default Header
