import React from 'react'
import { Button } from '../components/Button.js'
import { Link } from 'react-router-dom';
import './css/homePage.css'

export default function HomePage() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted/>
      <h1>SKILL - LINK</h1>
      <p>Your Future Starts Here </p>
      <div className="hero-btns">
        <Link to={`/joblisting`}>
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">SEARCH JOBS</Button>
        </Link>
        {/* <a href="/jobs">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">SEARCH JOBS</Button>
        </a> */}
      </div>
      <br/>
      <div>
        <Link to={`/survey`}>
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">ENTER SKILLS</Button>
        </Link>
        {/* <a href="/skills">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">ENTER SKILLS</Button>
        </a> */}
      </div>
    </div>
  )
}

