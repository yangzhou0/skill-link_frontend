import React from 'react'
import { Button } from '../components/Button.js'
import './css/homePage.css'

export default function HomePage() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted/>
      <h1>SKILL - LINK</h1>
      <p>Your Future Starts Here </p>
      <div className="hero-btns">
        <a href="/jobs">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">SEARCH JOBS</Button>
        </a>
      </div>
      <br/>
      <div>
        <a href="/skills">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">ENTER SKILLS</Button>
        </a>
      </div>
    </div>
  )
}

