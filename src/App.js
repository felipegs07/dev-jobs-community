import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import JobBoard from './components/jobs/JobBoard';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/jobs/:id" component={JobBoard}/>
        </Switch>
      </div>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
