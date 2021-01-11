import React,{useState, useEffect} from 'react'
import Select from 'react-select'
import axios from 'axios'
import {getSkillAutoCompleteResults} from '../API/AutoCompleteAPI'



export default function SkillSearchBar() {
  const [Options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div>
      <h1>Skill Search Bar</h1>
    </div>
  )
}
