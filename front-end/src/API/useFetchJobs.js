import React from 'react'
import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

export default function useFetchJobs(params,page) {
  const [state,dispatch] = useReducer(reducer,{jobs:[],loading:true})

  return (
    <div>
      
    </div>
  )
}
