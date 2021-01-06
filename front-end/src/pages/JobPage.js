import React,{useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import './css/JobPage.css'
export default function JobPage() {


  return (
    <div className = 'JobPage'>
      <h1>job page</h1>
      <SearchBar />
    </div>
  )
}
