import React from 'react';
import 
{
  dots,
  dotS,
  dotF,
  dotL,
  dotZ,
  dotT,

} 
from './Loader.module.css'

const Loader = ()=>{
//   let $ = (e) => document.querySelector(e);

// // Dots
// // ====
// let dots = $(".dots");

// // Function
// // ========
// function animate(element, className) {
//   element.classList.add(className);
//   setTimeout(() => {
//     element.classList.remove(className);
//     setTimeout(() => {
//       animate(element, className);
//     }, 500);
//   }, 2500);
// }

// // Execution
// // =========
// animate(dots, "dots--animate");

  return(
    <>
    <h1>Loading
      <div className={dots}>
        <span className={dotZ}></span>
        <span className={dotF}></span>
        <span className={dotS}></span>
        <span className={dotT}>
          <span className={dotL}></span>
          Loading...
        </span>
      </div>
    </h1>
    </>
  )
}

export default Loader;
