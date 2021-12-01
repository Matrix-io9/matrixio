import React, { createContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
import useMediaQuery from "./hooks/useMediaQuery.js";
const Home = lazy(() => import('./pages/Home/Home'));
const Team = lazy(() => import('./pages/Team/Team'));
// const Error = lazy(() => import('./pages/404'));

function App() {
  const isMobile = useMediaQuery('(max-width: 700px)');
  const DeviceContext = createContext(false);

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <DeviceContext.Provider value={isMobile}>
            <Route exact path="/" component={Home} status={200} />
            <Route path="/team" component={Team} />
            {/* <Route path="*" component={Error} status={404} /> */}
          </DeviceContext.Provider>
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App;
