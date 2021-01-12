import React,{useState, useEffect} from 'react'
import AsyncSelect from 'react-select/async';
import {getZipcodeAutoCompleteResults} from '../API/AutoCompleteAPI'
import { Link} from 'react-router-dom';



export default function ZipcodeSearchBar() {

  const loadNewOptions = inputValue => getZipcodeAutoCompleteResults(inputValue);
  const [selectedZipcode, setSelectedZipcode] = useState(Object())
  const handleSelectZipcode = (e)=>{
    setSelectedZipcode(e)
  }
  return (
    <div>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadNewOptions}
        onChange = {handleSelectZipcode}
      />
      <Link to={`/zipcode`}>
        <button>Continue</button>
      </Link>

    </div>
  )
}
