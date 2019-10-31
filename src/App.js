import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserCard from './components/user-card/UserCard';
import MainPage from './components/MainPage/MainPage';
import Activities from './components/Activities/Activities';
import Report from './components/Report/Report';
import EditProfile from './components/EditProfile/EditProfile';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/edit">
            <EditProfile />
          </Route>
        </Switch>
        <Navbar />
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
        <UserCard />
      </Router>
    </React.Fragment>
  );
}

export default App;
