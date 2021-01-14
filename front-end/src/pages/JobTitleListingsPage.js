import React from 'react'
import JobTitles from '../components/JobTitles'
export default function JobTitleListingsPage(props) {
  let jobs = props.location.state.jobs
  return (
    <div>
      <JobTitles jobs={jobs}></JobTitles>
    </div>
  )
}