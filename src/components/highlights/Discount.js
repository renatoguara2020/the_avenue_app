import React, {useState, useEffect} from 'react';
import {Fade, Slide} from 'react-awesome-reveal';


const Discount = () =>{


    return(

    <div className="center_wrapper">
      <div className="discount_wrapper">
       <Fade>
        <div className="discount_porcentage">
        <span>30%</span>
        <span>OFF</span>
        </div>
       </Fade>

       <Slide right>
         <div className="discount_description">
         <h3>Purchase ticket before 20th June</h3>
         <p>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         </p>
         
         </div>
       </Slide>
      
      </div>
    </div>

    )
}


export default Discount;