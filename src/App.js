import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Event from './Components/Event/Event';
import Donation from './Components/Donation/Donation';
import Blog from './Components/Blog/Blog';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import VolunteerRegister from './Components/VolunteerRegister/VolunteerRegister';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterdEvents from './Components/RegisterdEvents/RegisterdEvents';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Event></Event>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <PrivateRoute path="/volunteer-register/:id">
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute>
          <PrivateRoute path="/registerdEvents">
            <RegisterdEvents></RegisterdEvents>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
