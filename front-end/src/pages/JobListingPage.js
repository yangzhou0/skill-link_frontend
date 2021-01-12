import React from 'react'
import useFetchJobs from '../API/useFetchJobs'
import { Container } from 'react-bootstrap'
export default function JobListingPage() {
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      
    </Container>
  )
}
