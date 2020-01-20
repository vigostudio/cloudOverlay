import React from 'react';
import './App.css';
import Home from './components/Home';
// react-native

// react-dom (what we'll use here)
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playground from './components/Playground';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Switch>
          <Route path="/playground/:id" render={({ match }) => (
            <Playground
              id={match.params.id}
            />
          )} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
