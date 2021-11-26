import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
const Home = lazy(() => import('./pages/Home/Home'));
const Team = lazy(() => import('./pages/Team/Team'));
// const Error = lazy(() => import('./pages/404'));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={Home} status={200} />
          <Route path="/team" component={Team} />
          {/* <Route component={Error} status={404} /> */}
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App;
