import React,{useState, useEffect} from 'react'
import Select from 'react-select'
import {getSkillAutoCompleteResults} from '../API/AutoCompleteAPI'



export default function SkillSearchBar() {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    getSkillAutoCompleteResults('py').then(options => setOptions(options))
  },[])

  return (
    <div>
      <h1>Skill Search Bar</h1>
    </div>
  )
}
