import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserCard from './components/user-card/UserCard';

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <UserCard />
    </React.Fragment>
  );
}

export default App;
