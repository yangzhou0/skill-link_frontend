import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import {getAutoCompleteResults} from '../API/AutoCompleteAPI'
import {searchByJob} from '../API/JobSearchAPI'
import JobOverview from './JobOverview'
import './css/SearchBar.css'

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const [activeOption, setActiveOption] = useState(0);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(async ()=>{
    setAutoCompleteResults(await getAutoCompleteResults(input))
  },[input])

  const handleType = async (e) =>{
    let userInput = e.target.value;
    await setShowOptions(true)
    await setInput(userInput)

    // make API calls to auto complete in backend to change autoCompleteResults
  }

  const handleClick = (e) =>{
    setActiveOption(0)
    setShowOptions(false)
    setInput(e.currentTarget.innerText)
  }
  const handleSearch = async (e) =>{
    let searchedUUID = findUUIDFromAutocompletes(input)
    console.log('serached',searchedUUID)
    await setSearchContent(searchedUUID)
    searchByJob(searchedUUID).then((response)=>{
      console.log(response)
    })
  }

  const findUUIDFromAutocompletes = (title) => {
    for (let i = 0; i < autoCompleteResults.length;i++){
      if (autoCompleteResults[i]['jobTitle'] == input){
        return autoCompleteResults[i]['uuid'] 
      }
    }
  }


  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveOption(0)
      setShowOptions(false)
      setInput(autoCompleteResults[activeOption]['jobTitle'])
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1)
    } else if (e.keyCode === 40) {
      if (activeOption === autoCompleteResults.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1)
    }
  }

  return (
    <React.Fragment>
      <div className = 'search'>
        <input className="search-box" onChange={(e) =>handleType(e)} onKeyDown={(e)=>{handleKeyDown(e)}} type = 'text' value = {input}/>
        <input type="submit" value ='' className = 'search-btn' onClick = {(e)=>handleSearch(e)} />
      </div>
      <ul className="options">
        {showOptions && input && autoCompleteResults.map((option,index) =>(
          <li className = {index === activeOption ? 'option-active' : ''} onClick={e=>handleClick(e)}>{option['jobTitle']}</li>
        ))}
      </ul>
      {showOptions && input && autoCompleteResults.length === 0 && 
      <div className="no-options">
        <em>No Option!</em>
      </div>
      }
    </React.Fragment>
  )
}
