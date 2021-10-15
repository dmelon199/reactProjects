import React from 'react'
import skills from '../skills';
import SkillsList from './SkillsList';

function Skills() {
    return ( 
        <div className="skills-wrapper d-flex flex-column p-5">
            <h1 className="widget-heading">Commonly Used Languages and Apps</h1>
            <div className="skills-content container-xl">
                    {Object.keys(skills).map(function(item) {
                        return (
                        <SkillsList
                            class={skills[item].class}
                            imgUrl={skills[item].imgUrl}
                            name={skills[item].name}
                        />
                        )
                    })}
            </div>
        </div>
    )
}


export default Skills