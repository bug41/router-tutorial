import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';


const App = () => {
  return (
    <div>
      <Router>

        
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
          <li><Link to="/profile/velopert">velopert 프로필</Link></li>
          <li><Link to ="/profile/gildong">gildong 프로필</Link></li>
        </ul>
        
        <Route path="/" exact component={Home} />
        <Route path={['/about', '/info']} component={About} />        
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles/:username" component={Profiles} />
        
        
      </Router>
    </div>
  );
};

export default App;
