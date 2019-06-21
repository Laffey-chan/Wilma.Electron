import React from 'react';
import axios from 'axios';
import './App.css';
import MenuBar from './components/MenuBar';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { SID: '', LoggedIn: false };
  }
  render() {
    return (
      <div className="App">
        <MenuBar></MenuBar>
        <body>
          <Login getSID={this.getSID.bind(this)}></Login>
        </body>
      </div>
    );
  }

  getSID(userName, passWord) {
    axios.post('/login', {
      username: userName,
      password: passWord
    }).then((res) => {
      if(res.data === ''){
        alert('Kirjautuminen epäonnistui');
      }else{
         this.setState({SID: res.data, LoggedIn:true});
         alert('Kirjautuminen onnistui \n SID: ' + this.state.SID + '\n Kirjauduttu: ' + this.state.LoggedIn);
      }
    })
  }
}

export default App;
