<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from '../components/Navbar/Navbar';

const Main = (props) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Matrix.io" defaultTitle="Matrix.io" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <Navbar toggleText='Team' toggleLink='team'/>
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Matrix.io Official Website",
};

=======
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from '../components/Navbar/Navbar';

const Main = (props) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Matrix.io" defaultTitle="Matrix.io" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <Navbar toggleText='Team' toggleLink='team'/>
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Matrix.io Official Website",
};

>>>>>>> 49d7a0d1a81cfb54255dac063afcf939c9d2d591
export default Main;