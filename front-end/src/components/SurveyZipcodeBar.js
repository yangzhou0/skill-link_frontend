import React from 'react'

export default function SurveyZipcodeBar({setZipcode,setShowForm}) {
  const reverseToZipcode = (latitude,longitude)=>{
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        latlng: `${latitude},${longitude}`,
        key: "AIzaSyBQRL4jBWcGAQAoKl6z5a5FbKvetm8RZ2M"
      }
    })
    .then(function (response) {
      console.log(response);
      let zipcode = response.results[0].address_components[address_components.length - 1].short_name
      setZipcode(zipcode)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  }
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
    latitude = position.coords.latitude;
    longitude position.coords.longitude;
    reverseToZipcode = (latitude,longitude)
    setZipcode
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
