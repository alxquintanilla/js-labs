import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import CardsAvailable from './component/public_site/CardsAvailable'
import CreditApplication from './component/public_site/CreditApplication';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <div className="main-content">
          <Route exact path="/" component={CardsAvailable} />
          <Route exact path="/CreditApplication" component={CreditApplication} />
        </div>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
