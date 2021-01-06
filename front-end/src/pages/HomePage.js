import React from 'react'
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

import './css/HomePage.css'

export default function HomePage() {
  return (
    <div>
      <a href="/jobs">
        <Button> jobs Button </Button>
      </a>
      <a href="/skills">
        <Button> skills Button </Button>
      </a>
    </div>
  )
}

