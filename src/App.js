import React from 'react';

import './App.css';
import Footer from './footer';
import Head from './head';
import Slider from './slider';
import Customer from './customer';

function App() {
  return (
    <>
     
    <div className="App">
      <header className="App-header">
       <Head />
      </header>
      <body>
        <Slider />
        <Customer />
        <Footer />
      </body>
     
    </div>
    </>
  );
}

export default App;
