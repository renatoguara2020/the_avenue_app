import React from 'react';
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
       <Fragment>
       <Featured/>
       </Fragment>

       <Fragment>
        <VenueNfo />
       </Fragment>

       <Fragment> 
         <Highlights/>
       </Fragment>
         
       <Fragment>
          <Pricing />
       </Fragment>
        
       <Fragment>
       <Location />
       </Fragment>
        <Footer />
    </div>
  );
}

export default App;
