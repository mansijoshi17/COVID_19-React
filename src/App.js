import React, { useState } from 'react';
import State from './Components/State';
import District from './Components/District';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {

  const [Search, setSearch] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div class="form-group has-search ml-5 mt-3" style={{ width: '500px' }}>
        <input type="text" class="form-control" placeholder="Search State...." onChange={onChangeHandler} />
      </div>
      <Router>
        <Route exact path="/">
          <State search={Search} />
        </Route>
        <Route exact path="/district">
          <District search={Search} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
