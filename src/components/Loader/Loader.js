import React from 'react';
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import loadingspinner from '../../images/Spinner-1.1s-130px.gif';
import loadingspinner from '../../images/Rolling-1s-137px.gif';
import {
  container,
  text
} from './Loader.module.css'

const Loader = () => {
  return (
    <div className={container}>
      {/* <Spinner
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      <img src={loadingspinner} alt="spinner"/>
      <span className={text}>
        Loading
      </span>
    </div>
  )
}

export default Loader;
