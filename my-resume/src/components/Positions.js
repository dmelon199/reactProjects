import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Positions(props) {
    return ( 
        <Fade>
            <div className={`position ${props.class}`}>
                <ul>
                    <li className="position-info pl-3">
                        <h2 style={{textAlign: "left"}}>{props.position}</h2>
                        <h3 style={{textAlign: "left"}}>{props.time}</h3>
                        <h4 style={{textAlign: "left", fontStyle: "italic", color: "gray"}}>{props.location}</h4>
                        <ul className="position-experience" style={{textAlign: "left"}}>{props.description.map((jobInfo) => {
                                return (
                                    <Slide>
                                        <li>{jobInfo}</li>
                                    </Slide>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </Fade>
    )
}


export default Positions