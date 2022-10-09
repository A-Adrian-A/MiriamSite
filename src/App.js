
import './App.css';
import React from 'react';
import './colors.css'
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ZPattern from './components/z_pattern/ZPattern';


import eigenheim from "./img/eigenheim/eigenheim.jpg"
import eigenheim_1 from "./img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import eigenheim_2 from "./img/eigenheim/eigenheim4.jpg"

import versicherungen from "./img/versicherungen/versicherungen.jpg"
import versicherungen_1 from "./img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import versicherungen_2 from "./img/eigenheim/eigenheim4.jpg"

import vermoegensaufbau from "./img/vermoegensaufbau/vermoegensaufbau.jpg"
import vermoegensaufbau_1 from "./img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import vermoegensaufbau_2 from "./img/eigenheim/eigenheim4.jpg"

import vorsorge from "./img/vorsorge/vorsorge.jpg"
import vorsorge_1 from "./img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import vorsorge_2 from "./img/eigenheim/eigenheim4.jpg"
import AboutMe from './components/about_me/AboutMe';
import FAQ from './components/faq/FAQ';

const pages = {
  eigenheim: {
    title: "Eigenheim",
    image: eigenheim,
    images: [eigenheim_1, eigenheim_2, eigenheim_1]
  },
  versicherungen: {
    title: "Versicherungen",
    image: versicherungen,
    images: [versicherungen_1, versicherungen_2, versicherungen_1]
  },
  vermoegensaufbau: {
    title: "Vermoegensaufbau",
    image: vermoegensaufbau,
    images: [vermoegensaufbau_1, vermoegensaufbau_2, vermoegensaufbau_1]
  },
  vorsorge: {
    title: "Vorsorge",
    image: vorsorge,
    images: [vorsorge_1, vorsorge_2, vorsorge_1]
  }
}

function App() {
  return (
    <Router>
      <div className='app'>
        <div id="wrapper">
          <Navigation></Navigation>
          <header className="App-header">
          </header>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< Home />}></Route>
            <Route exact path='/contact' element={< Home />}></Route>
            <Route exact path='/home-owner' element={<ZPattern page={pages.eigenheim} />}></Route>
            <Route exact path='/appreciation-of-assets' element={<ZPattern page={pages.vermoegensaufbau} />}></Route>
            <Route exact path='/insurance' element={<ZPattern page={pages.versicherungen} />}></Route>
            <Route exact path='/pension' element={<ZPattern page={pages.vorsorge} />}></Route>
            <Route exact path='/about-me' element={<AboutMe />}></Route>
            <Route exact path='/faq' element={<FAQ/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
