import React from 'react'

function Navbar(props) {
  return (
    <div>
      <div className="navbar">
            <h1 id="heading">OS LAB</h1>
            <ul className="nav-items">
                <li><a href="\">Home</a></li>
                <li><a href="about.html" target="_blank">About</a></li>
                <li><a href="\">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
