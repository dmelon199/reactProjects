import React from 'react'
import Positions from './Positions';
import jobInfo from '../jobInfo';

const MyResume = (props) => {
    return ( 
        <div className="experience-wrapper d-flex flex-column px-5 py-3">
            <h1 className="widget-heading">My Real World Experience</h1>
                <div className="experience-container d-flex flex-column container-xl">
                    <div className="experience-content">
                    {Object.keys(jobInfo).map(function(item) {
                        return (
                        <Positions
                            class={jobInfo[item].class}
                            position={jobInfo[item].position}
                            time={jobInfo[item].time}
                            location={jobInfo[item].location}
                            description={jobInfo[item].description}
                        />
                        )
                    })}
                    </div>
                <div className="resume-button d-flex justify-content-center">
                    <btn style={{margin: "30px", backgroundColor:"#04a9e0", padding:"20px 30px"}} className="btn-primary btn-med">
                        <a style={{color:"#fff", fontWeight:"bold"}} target="_blank" rel="norefeller" href="/images/resume-test.pdf">Download Resume</a>
                    </btn>
                 </div>
            </div>
        </div>

    )
}


export default MyResume