import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={Card}/>
          <Route path='/1' component={Page1}/>
          <Route path='/2' component={Page2}/>
          <Route path='/3' component={Page3}/>
          <Route path='/4' component={Page4}/>
          <Route path='/5' component={Page5}/>
          <Route path='/6' component={Page6}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
