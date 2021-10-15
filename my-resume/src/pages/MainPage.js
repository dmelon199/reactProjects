
import React from 'react'

/* COMPONENTS */
import WelcomeSection from '../components/WelcomeSection';
import Skills from '../components/Skills';
import MyResume from '../components/MyResume';
import Education from '../components/Education';
import MyProjects from '../components/MyProjects';
import Test from '../components/Test';



function MainPage() {


  return (

        <div>
          <div className="body px-5">
            <WelcomeSection />
            <div className="body-content">
              <MyProjects />
              <Skills />
              <MyResume />
              <Education />
            </div>
          </div>
        </div>

  );
}

export default MainPage;
