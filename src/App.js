import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Team = lazy(() => import('./pages/Team/Team'));
// const Error = lazy(() => import('./pages/404'));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} status={200} />
          <Route path="/team" component={Team} />
          {/* <Route component={Error} status={404} /> */}
        </Suspense>
      </Switch>
    </Router>
    
  )
}

export default App;
