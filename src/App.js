import React from 'react';

//components
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Wwd from './components/wwd';
import StartHere from './components/StartHere';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Expertise />
            <StartHere />
            <Wwd />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App;