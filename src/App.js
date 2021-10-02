import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from "./layouts/Main";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

const Index = lazy(() => import('./pages/home/home'));
const Team = lazy(() => import('./pages/team/team'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
  return (
    <Router>
       <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/team" component={Team} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
    </Router>

  )
}

export default App;
