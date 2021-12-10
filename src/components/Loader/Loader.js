import React from 'react';
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  container,
  text
} from './Loader.module.css'

const Loader = () => {
  return (
    <div className={container}>
      <Spinner
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <span className={text}>
        Loading
      </span>
    </div>
  )
}

export default Loader;
