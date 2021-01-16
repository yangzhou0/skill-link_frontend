class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lattitude: null,
      longitude: null,
      userAddess: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })  
  }
  handleLocationError(error) {
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
  render() {
    return (
      <div className="App">
        <h2>
          React Geolocation Example
        </h2>
        <button onClick={this.getLocation}>Get coordinates</button>
        <h4>HTML5 coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Google Maps Reverse Geocoding</h4>
        <p>Address: {this.state.userAddess}</p>
      </div>
    )
  }
}