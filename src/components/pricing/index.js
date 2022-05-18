import React from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-awesome-reveal';


const Pricing = () =>{

    const priceState = {

        prices:[100,150,200],
        position:['balcony','Medium', 'Star'],
        desc: 
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adUt enim adtempor incididunt ut labore'
        ],
        linkTo:['http://google.com', 'http://www.google.com', 'http://www.google.com'],
        delay: [500,0,500]
    }

      const showBoxes = () => (

   priceState.prices.map((box,index)=>(

    <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
      <div className="pricing_inner_wrapper">
        <div className="pricing_title">
          <span>${priceState.prices[index]}</span>
          <span>${priceState.position[index]}</span>
          <span>${priceState.desc[index]}</span>
          <span>${priceState.prices[index]}</span>
        </div>
      </div>
    </Zoom>
   ))

      )
    return(

        <div className="bck_black">
          <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
             {showBoxes()}
          </div>
          </div>
        </div>
    )
}


export default Pricing;