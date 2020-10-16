import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import Page1 from "./components/Page1/Page1";
// import Page2 from './components/Page2/Page2';
// import Page3 from './components/Page3/Page3';
// import Page4 from './components/Page4/Page4';
// import Page5 from './components/Page5/Page5';
// import Page6 from './components/Page6/Page6';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Card} />
          <Route path="/1" component={Page1} />
          {/* <Route path='/2' component={Page2}/>
          <Route path='/3' component={Page3}/>
          <Route path='/4' component={Page4}/>
          <Route path='/5' component={Page5}/>
          <Route path='/6' component={Page6}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
