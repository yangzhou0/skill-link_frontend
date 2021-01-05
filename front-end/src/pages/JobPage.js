import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import {getAutoCompleteResults} from '../API/AutoCompleteAPI'
import JobOverview from '../components/JobOverview'

export default function JobPage() {
  const [input, setInput] = useState('');
  const [autoCompleteResult, setAutoCompleteResult] = useState(['autocomplete1','autocomplete2']);
  const [searchContent, setSearchContent] = useState('');

  const handleType = (e) =>{
    let userInput = e.target.value;
    setInput(userInput)
    // make API calls to auto complete in backend to change autoCompleteResult
  }
  const handleSearch = (e) =>{
    // link to another page
    setSearchContent(input)
  }


  return (
    <div>
      <h1>job page</h1>
      <input onChange={(e) =>handleType(e)} type = 'text'></input>
      <Button onClick = {(e)=>handleSearch(e)}> Search </Button>
      {searchContent && <JobOverview jobTitle ={searchContent} />}
    </div>
  )
}
