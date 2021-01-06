import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import {getAutoCompleteResults} from '../API/AutoCompleteAPI'
import JobOverview from '../components/JobOverview'

export default function JobPage() {
  const [input, setInput] = useState('');
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const handleType = async (e) =>{
    let userInput = e.target.value;
    setInput(userInput)
    setAutoCompleteResults(await getAutoCompleteResults(userInput))
    // make API calls to auto complete in backend to change autoCompleteResults
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
      {autoCompleteResults && autoCompleteResults.map((result) => (
        <h4>{result}</h4>
      ))}
    </div>
  )
}
