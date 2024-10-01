import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className="navbar-container" id="navbar-name-container">
            <p className="navbar-name">Mateusz Wawrzyniak</p>
        </div>

        <div className="navbar-container" id="navbar-options-container">
          <div className="navbar-option">
            <a href="/" className="navbar-option-text">About me</a>
            <div className="navbar-option-border">&nbsp;</div>
          </div>
          <div className="navbar-option">
            <a href="" className="navbar-option-text">Projects</a>
            <div className="navbar-option-border">&nbsp;</div>
          </div>
          <div className="navbar-option">
            <a href="" className="navbar-option-text">CV and contact</a>
            <div className="navbar-option-border">&nbsp;</div>
          </div>
        </div>
    </div>
  )
}