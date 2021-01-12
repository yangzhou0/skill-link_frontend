import React from 'react'
import useFetchJobs from '../API/useFetchJobs'
import { Container } from 'react-bootstrap'
export default function JobListingPage() {
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      {loading && <h1>loading</h1>}
      {error && <h1>Error try refreshing</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}
