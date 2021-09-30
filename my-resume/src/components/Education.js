import React from 'react'

function Education() {
    return ( 
        <div className="my-education-wrapper d-flex flex-column p-5">
            <h1 className="widget-heading">I Miss College</h1>
            <div className="my-education-content d-flex container-xl pt-5">    
                <div>
                    <img style={{width:"70%"}} src="/images/champ.png" alt="Champlain College Logo" title="Champlain College"/>
                </div>
                <div>
                    <h3>Champlain College</h3>
                    <p>Burlington, Vermont</p>
                    <p>2008-2012</p>
                    <p>Recieved my Bachelor of Science in Graphic Design & Digital Media</p>
                    <p>Studied abroad in Dublin, Ireland during the 2010 Fall semester of my Junior Year</p>
                </div>
            </div>
        </div>
    )
}


export default Education