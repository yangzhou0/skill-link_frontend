import React, { useState } from 'react';
import useFetchJobs from '../API/useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from '../components/JobListingPage/Job'

export default function JobListingPage() {
  const { jobs, loading, error } = useFetchJobs()
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  return (
    <Container className="my-4">
      <h1 className = "mb-4">Tech Jobs</h1>
      {loading && <h1>loading</h1>}
      {error && <h1>Error try refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  )
}
