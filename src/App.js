import React from 'react';
import {Element} from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import {Fragment}  from 'react';
const  App = () => {
  return (

    <div className="App">
       
       <Header />
       <Element name="featured">
       <Featured/>
       </Element>

       <Element name="venuenfo">
        <VenueNfo />
       </Element>

       <Element name="highlights"> 
         <Highlights/>
       </Element>
         
       <Element name="pricing">
          <Pricing />
       </Element>
        
       <Element name="location">
       <Location />
       </Element>
        <Footer />
    </div>
  );
}

export default App;
