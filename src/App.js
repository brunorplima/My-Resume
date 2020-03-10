import React from 'react';
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import SocialMedia from './components/social-media/SocialMedia';
import IntroText from './components/intro/IntroText';
import SectionHeader from './components/section-header/SectionHeader';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <div className="App">
         <Header />
         <div className="translate">
            <Intro />
            <SocialMedia />
            <IntroText />

            <SectionHeader title="Education" id="education"/>
            <Education />

            <SectionHeader title="Portfolio" id="portfolio"/>
            <Portfolio />

            <SectionHeader title="Skills" id="skills"/>
            <Skills />

            <SectionHeader title="Contact" id="contact"/>
            <Contact />

            <Footer />
         </div>
      </div>
   );
}

export default App;
