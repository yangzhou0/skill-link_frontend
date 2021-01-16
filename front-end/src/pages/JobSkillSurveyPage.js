import React from 'react'
import SkillsToJobForm from '../components/SkillsToJobForm'
import { useState, useEffect } from 'react'


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
      <h4>To make your serach more accurate, please enter your zipcode</h4>
      <input id = 'zipcode' placeholder='zipcode' ></input>
      <button onClick ={getCurrentZipcode}>get location</button>
      <button onClick ={(e)=>{setShowForm(true)}}>confirm</button>
      {showForm && <SkillsToJobForm />}
    </div>
  )
}