import React from 'react';
import {
  dots,
  dotS,
  dotF,
  dotL,
  dotZ,
  dotT,

}
  from './Loader.module.css'

const Loader = () => {

  // const [dots, animateDots] = useState('dots');

  // useEffect(() => {
  //   function animationOfDots(){
  //     animateDots(dots, "dots--animate");

  //     setTimeout(() => {
  //       animateDots(dots, "");

  //       setTimeout(() => {
  //         animateDots(dots, "dots--animate");

  //       }, 500);
  //     }, 2500);
  //   }
  // });

  return (
    <>
      <h1>Loading
        <div className={dots}>
          <span className={dotZ}></span>
          <span className={dotF}></span>
          <span className={dotS}></span>
          <span className={dotT}>
            <span className={dotL}></span>
          </span>
        </div>
      </h1>
    </>
  )
}

export default Loader;
