import React from 'react'

export default function SurveyZipcodeBar({getCurrentZipcode,setShowForm,setLattitude,setLongitude}) {

  const getLocation = () => {
    console.log('start accessing location')
    if (navigator.geolocation) {
      console.log('retrieving location')
      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  const getCoordinates = (position) => {
    console.log('position',position)
    setLattitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  const handleLocationError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user's location has timed out.")
        break;
      case error.UNKOWN_ERROR:
        alert("An unknown error occured.")
        break;
      default:
        alert("An unknown error occurred.")
    }
  }


  return (
    <div>
      <h4>To make your serach more accurate, please enter your zipcode</h4>
      <input id = 'zipcode' placeholder='zipcode' ></input>
      <button onClick ={(e) =>getLocation()}>get location</button>
      <button onClick ={(e)=>{setShowForm(true)}}>confirm</button>
    </div>
  )
}
