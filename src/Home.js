import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          key={3244234}
          id={3244234}
          title="The Lead Startup: How Constant Innovation Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

        <Product
          key={12214}
          id={12214}
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={329.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg" />
      </div>

      <div className="home__row">
        <Product
          key={45378}
          id={45378}
          title="Forehead Thermometer Non-Contact Infrared Thermometer for Baby Kids and Adults Accurate Instant Readings Forehead Thermometer with LCD Display"
          price={41.15}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/410ePEPfZZL.jpg" />

        <Product
          key={2256765}
          id={2256765}
          title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
          price={59}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61IBBVJvSDL._AC_SL1500_.jpg" />

        <Product
          key={12345}
          id={12345}
          title="Chalk Markers by Fantastic ChalkTastic Best for Kids Art, Chalkboard Labels, Menu Board Bistro Boards, 8 Glass Window Markers, non-toxic Erasable Liquid Pens Chisel or Fine Tip, Neon Colors plus White"
          price={11.86}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91T2IzAyPKL._AC_SL1500_.jpg" />
      </div>

      <div className="home__row">
        <Product
          key={24456}
          id={24456}
          title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 inch 4K Smart UHD TV (2020)"
          price={2099.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg" />
      </div>

      {/* Product */}
    </div>
  )
}

export default Home;
