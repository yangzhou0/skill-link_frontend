import React from 'react'

export default function SurveyZipcodeBar({getCurrentZipcode,setShowForm}) {
  return (
    <div>
      <h4>To make your serach more accurate, please enter your zipcode</h4>
      <input id = 'zipcode' placeholder='zipcode' ></input>
      <button onClick ={getCurrentZipcode}>get location</button>
      <button onClick ={(e)=>{setShowForm(true)}}>confirm</button>
    </div>
  )
}
