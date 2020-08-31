import React from 'react';
import axios from 'axios';
import './App.css';
import MenuBar from './components/MenuBar';
import Login from './components/Login';
import Schedule from './components/Schedule';
import MessageList from './components/MessageList';
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { SID: '', LoggedIn: false };
  }
  render() {
    let main;
    if (!this.state.LoggedIn)
      main = [<Login getSID={this.getSID.bind(this)}></Login>]
      else
        main = [<MessageList SID={this.state.SID}></MessageList>, <Schedule SID={this.state.SID}></Schedule>]
    return (
      <div className="App">
        <MenuBar></MenuBar>
          {main[0]}
          {main[1]}
      </div>
    );
  }

  getSID(userName, passWord) {
    fetch('https://gradia.inschool.fi/login', {method: 'POST', body:{
      Login:'',
      Password: '',
      format: 'json'
    }}).then(res => res.json()).then(body => {
      console.log(body);
    })
    axios.post('/login', {
      username: userName,
      password: passWord
    }).then((res) => {
      if (res.data === '') {
        alert('Kirjautuminen epäonnistui');
      } else {
        this.setState({ SID: res.data, LoggedIn: true });
        alert('Kirjautuminen onnistui \n SID: ' + this.state.SID + '\n Kirjauduttu: ' + this.state.LoggedIn);
      }
    })
  }
}

export default App;
