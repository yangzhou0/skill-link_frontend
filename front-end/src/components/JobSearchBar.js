import React,{useState, useEffect} from 'react'
import AsyncSelect from 'react-select/async';
import {getJobAutoCompleteResults} from '../API/AutoCompleteAPI'



export default function JobSearchBar() {

  const loadNewOptions = inputValue => getJobAutoCompleteResults(inputValue);
  const [selectedJob, setSelectedJob] = useState(Object())
  const handleSelectJob = (e)=>{
    setSelectedJob(e)
  }
  return (
    <div>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadNewOptions}
        onChange = {handleSelectJob}
      />
    </div>
  )
}
