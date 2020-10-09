import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
