import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';

import Checkout from './Checkout';

import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();

  // its like a listener to track of who is signed in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //  dispatch action for user login
        console.log('user  logged in i will dispatch a login event for user :', user);
        dispatch({
          type: 'USER_LOGGED_IN',
          user: user,
        });
      }

    },
      (error) => {
        alert('error while trying to get authstate event : ', error.message);
      })

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
