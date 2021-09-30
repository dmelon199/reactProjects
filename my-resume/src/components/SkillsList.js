import React from 'react';


function SkillsList(props){
    return(
        <div className={`skill-column ${props.class}`}>
            <img style={{width: "80%"}} src={`${props.imgUrl}`}/>
            <h3 style={{marginTop: "10px", color: "#fff"}}>{props.name}</h3>
        </div>
    )
}

export default SkillsList