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
       <Element>
       <Featured/>
       </Element>

       <Element>
        <VenueNfo />
       </Element>

       <Element> 
         <Highlights/>
       </Element>
         
       <Element>
          <Pricing />
       </Element>
        
       <Element>
       <Location />
       </Element>
        <Footer />
    </div>
  );
}

export default App;
