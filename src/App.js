import React from 'react';  
import './App.css';
import MenuBar from './components/MenuBar';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <MenuBar></MenuBar>
        <body>
          <Login></Login>
        </body>
      </div>
    );
  }
}

export default App;
