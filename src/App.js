import React, { useState } from 'react';
import State from './Components/State';
import District from './Components/District';
import NewsFeed from './Components/NewsFeed';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {

  const [Search, setSearch] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src="https://img.icons8.com/office/40/000000/coronavirus.png" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">HOME<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">NEWS</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="form-group has-search ml-5 mt-3" style={{ width: '500px' }}>
        <input type="text" className="form-control" placeholder="Search..." onChange={onChangeHandler} />
      </div>
      <Router>
        <Route exact path="/">
          <State search={Search} />
          <NewsFeed/>
        </Route>
        <Route exact path="/district">
          <District search={Search} />
        </Route>
        <Route exact path="/news">
          <NewsFeed />
        </Route>
      </Router>
    </div>
  );
}

export default App;
