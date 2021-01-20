import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {

  state = {
    contacts: {school_programs : []}
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/skill_link/learning_resources/')
    .then(res => res.json())
    .then((data) => {
      console.log('COMPONENT DID MOUNT', data)
      this.setState({ contacts: data})
    })
    .catch((err)=>console.log('ERROR', err))
  }

  render () {
    return (
      <Contacts contacts={this.state.contacts}/>
    )
  }
}

export default App;