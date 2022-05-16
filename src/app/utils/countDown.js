// import React, { useState, useEffect } from 'react';

// const TWO_AND_A_HALFT_DAYS_IN_MS = 150 * 60 * 1000;
// const NOW_IN_MS = new Date().getTime();

// const dateTimeAfterThreeDays = NOW_IN_MS + TWO_AND_A_HALFT_DAYS_IN_MS;

// const CountDown = () => {
//     const [ countDown, setCountDown ] = useState({
//         days: undefined,
//         hours: undefined,
//         minutes: undefined,
//         seconds: undefined
//     })

//     useEffect(() => {
//         interval
//     }, [])
//     return ( 
//     <>
    
//     </> 
//     );
// }
 
// export default CountDown;
// // Update the count down every 1 second
// var x = setInterval(function(distance) {
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);