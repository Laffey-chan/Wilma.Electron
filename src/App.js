import React from 'react';
import wilma from 'wilma';
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

  async getSID(userName, passWord) {
    var newSID = await wilma.LoginWilma(userName, passWord);
    alert(newSID);
    if (newSID !== ''){
      this.setState({ SID: newSID, LoggedIn: true });
      alert("Kirjautuminen onnistui \n SID: " + newSID);
    }
    else
        alert("Kirjautuminen epäonnistui");
  }

}

export default App;
