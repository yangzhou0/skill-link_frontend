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

  const getCurrentZipcode = (e)=>{

  }

  return (
    <div>
      <SurveyZipcodeBar setShowForm = {setShowForm} getCurrentZipcode={getCurrentZipcode} />
      {showForm && <SkillsToJobForm />}
    </div>
  )
}