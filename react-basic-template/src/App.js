import React from 'react';
import Login from './component/Login';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
            <Login />
      </div>
    );
  }
}

export default App;
