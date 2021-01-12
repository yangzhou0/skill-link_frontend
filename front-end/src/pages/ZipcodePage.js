import React,{useState, useEffect} from 'react'

import ZipcodeSearchBar from '../components/ZipCodeSearchBar'

import './css/JobPage.css'
export default function JobPage() {
  return (
    <div className = 'JobPage'>
      <ZipcodeSearchBar/>
    </div>
  )
}
