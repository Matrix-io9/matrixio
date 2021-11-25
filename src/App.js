import React, { Suspense, lazy } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
=======
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

>>>>>>> 49d7a0d1a81cfb54255dac063afcf939c9d2d591
const Home = lazy(() => import('./pages/Home/Home'));
const Team = lazy(() => import('./pages/Team/Team'));
// const Error = lazy(() => import('./pages/404'));

function App() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Suspense fallback={<Loader />}>
=======
        <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 49d7a0d1a81cfb54255dac063afcf939c9d2d591
          <Route exact path="/" component={Home} status={200} />
          <Route path="/team" component={Team} />
          {/* <Route component={Error} status={404} /> */}
        </Suspense>
      </Switch>
    </Router>
<<<<<<< HEAD

=======
    
>>>>>>> 49d7a0d1a81cfb54255dac063afcf939c9d2d591
  )
}

export default App;
