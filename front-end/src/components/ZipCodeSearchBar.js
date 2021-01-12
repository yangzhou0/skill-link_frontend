import React,{useState, useEffect} from 'react'
import AsyncSelect from 'react-select/async';
import {getZipcodeAutoCompleteResults} from '../API/AutoCompleteAPI'
import {searchByJob} from '../API/JobSearchAPI'

import { Link} from 'react-router-dom';


export default function ZipcodeSearchBar() {

  // const loadNewOptions = inputValue => getZipcodeAutoCompleteResults(inputValue);
  const [selectedZipcode, setSelectedZipcode] = useState(
    JSON.parse(localStorage.getItem("searchContent")).zipcode || String
    )

  const handleType = (e)=>{
    let zipcode = document.getElementById(`zipcode`).value
    setSelectedZipcode(zipcode)
  }
  useEffect(() => {
    let parsedSearchContent = JSON.parse(localStorage.getItem("searchContent"))
    parsedSearchContent.zipcode = selectedZipcode
    localStorage.setItem("searchContent", JSON.stringify(parsedSearchContent));
  }, [selectedZipcode]);
  
  const handleSubmit = async (e) =>{
    let parsedSearchContent = JSON.parse(localStorage.getItem('searchContent'))
    let searchObject = {
      "job_title":parsedSearchContent.label + 's',
      "zipcode":parsedSearchContent.zipcode
    }
    let response = await searchByJob(searchObject)
    console.log('response',response)
  }

  return (
    <div>
      <input id = 'zipcode' placeholder='zipcode' onChange = {handleType}></input>
      <Link to={`/JobSearchResultPage`}>
        <button onClick = {handleSubmit}>Submit</button>
      </Link>

    </div>
  )
}
