
import React from 'react'

/* COMPONENTS */
import WelcomeSection from '../components/WelcomeSection';
import Skills from '../components/Skills';
import MyResume from '../components/MyResume';
import MyEducation from '../components/MyEducation';
import MyProjects from '../components/MyProjects';

const MainPage = () => {
  return (
    <div>
      <div className="body-page">
      <WelcomeSection />
        <div className="body-content">
          <MyProjects />
          <Skills />
          <MyResume />
          <MyEducation />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
