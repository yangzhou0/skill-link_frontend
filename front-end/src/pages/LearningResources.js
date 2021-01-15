import React from 'react'
import { Card, Button } from 'react-bootstrap'
import default_img from "../assets/graduation_cap.jpg"
import {useState,useEffect} from 'react'
import {findLearningResources} from '../API/LearningResourcesAPI'

const LearningResources = (props) => {
  let jobTitle = props.location.state.jobTitle
  let zipcode = props.location.state.zipcode
  let searchObject = {
    "job_title":jobTitle,
    "zipcode":zipcode
  }
  console.log('zip',zipcode)
  console.log('title',jobTitle)
  const [contacts,setContacts] = useState('')
  useEffect(() => {
    findLearningResources(searchObject).then(response=>{
      setContacts(response)
    })
  }, [props])
  
  return (
    contacts ? <div class="container">
      {contacts["school_programs"].map(contact => {
      return (
        <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {contact.school_name} - <span className="text-muted font-weight-light">{contact.program_name}</span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                Address: {contact.address} 
                <br/>
                Phone: {contact.phone}
              </Card.Subtitle>
            </div>
            <img className="d-none d-md-block" height="50" src={typeof(contact.img_url) == 'string' ? contact.img_url : default_img } alt="school logo" />
          </div>
          <Card.Text>
            <Button variant="primary" href={contact.school_url}> Visit Site </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      )
    })}
    </div> : <div></div>
  )
};

export default LearningResources