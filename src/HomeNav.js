import './HomeNav.css'
import React from 'react'

export const HomeNav = () => {
  return (
    <div id="homenav">
        <div className="homenavbar-container" id="homenavbar-name-container">
            <p className="homenavbar-name">Mateusz Wawrzyniak</p>
        </div>

        <div className="homenavbar-container" id="homenavbar-options-container">
          <div className="homenavbar-option">
            <a href="/aboutme" className="homenavbar-option-text">About me</a>
            <div className="homenavbar-option-border">&nbsp;</div>
          </div>
          <div className="homenavbar-option">
            <a href="/projects" className="homenavbar-option-text">Projects</a>
            <div className="homenavbar-option-border">&nbsp;</div>
          </div>
          <div className="homenavbar-option">
            <a href="/contact" className="homenavbar-option-text">CV and contact</a>
            <div className="homenavbar-option-border">&nbsp;</div>
          </div>
        </div>
    </div>
  )
}
