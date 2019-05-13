import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import JobBoard from './components/jobs/JobBoard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/jobs/:id" component={JobBoard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
