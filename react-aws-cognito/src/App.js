import React from 'react';
import Header from './component/Header';
import './App.css';
import cognitoCall from './service/cognitoCall';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Welcome from './component/Welcome';
import SignedOut from './component/SignedOut';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLogged : false,
      result : null
    };
  }
  render(){
    return(
      <div className="App">
        <Header />
        
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/signOut" component={SignedOut} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
