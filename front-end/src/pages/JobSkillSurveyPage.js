import React from 'react'
import SkillsToJobForm from '../components/SkillsToJobForm'
import { useState, useEffect } from 'react'
import SurveyZipcodeBar from '../components/SurveyZipcodeBar'

export default function JobListingsPage() {
  const [lattitude,setLattitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  const [consent,setContent] = useState(false)
  const [showForm,setShowForm] = useState(false)
  const [zipcode,setZipcode] = useState('')



  let props = {
    setLattitude: setLattitude,
    setLongitude: setLongitude,
    setShowForm: setShowForm,
    setZipcode: setZipcode
  }
  return (
    <div>
      <SurveyZipcodeBar {...props} />
      {showForm && <SkillsToJobForm />}
    </div>
  )
}