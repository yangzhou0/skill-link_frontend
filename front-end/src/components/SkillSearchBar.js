import React,{useState, useEffect} from 'react'
import AsyncSelect from 'react-select/async';
import {getSkillAutoCompleteResults} from '../API/AutoCompleteAPI'



export default function SkillSearchBar() {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('py');
  const [selectedOptions, setSelectedOptions] = useState([]);
  // useEffect(() => {
  //   getSkillAutoCompleteResults(input).then(options => setOptions(options))
  // },[input])

  const loadNewOptions = inputValue =>
  new Promise(resolve => {
    resolve(getSkillAutoCompleteResults(inputValue));
  });
  
  return (
    <div>
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={loadNewOptions}
      />
    </div>
  )
}
