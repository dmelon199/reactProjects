
import React, { useState, useEffect } from 'react'

/* COMPONENTS */
import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import LoadingScreen from '../components/Loading';
import MyWork from '../components/MyWork';
import Footer from '../components/Footer';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

function MainPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div>
          <Header />
            <div className="body">
              <WelcomeSection />
              <div className="body-content">
                <MyWork />
                <Skills />
                <Experience />
                <Education />
                </div>
              <Footer />
            </div>
        </div>
      ) : (
          <LoadingScreen />
        )}
      </>
  );
}

export default MainPage;
