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
      <Select options={options} isMulti />
    </div>
  )
}
