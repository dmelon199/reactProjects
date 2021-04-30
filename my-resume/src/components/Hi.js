
import React from "react"


function Hi() {
    return (
        <div className="hi-hero-wrapper d-flex flex-column flex-md-row p-5">
            <div className="hi-hero hi-left-hero d-flex col-xs-12 col-md-6 pb-4 pb-md-0 pl-md-0 pr-3">
                <div className="content">
                    <span>maybe its DAVE MELINE</span>
                </div>
            </div>
            <div className="hi-hero hi-right-hero d-flex col-md-6 col-xs-12 pr-md-0 pl-5">
                <div className="content">
                    <ul style={{paddingLeft: "0", marginBottom: "0px"}}>
                        <li style={{padding: "10px 0px"}}>
                            <a href="https://www.linkedin.com/in/david-meline/" target="_blank">
                                <img src="/icons/linked-in.svg" className="filter-color" alt="Linked In Profile Link" title="Linked In"/>
                            </a>
                        </li>
                        <li style={{padding: "10px 0px"}}>
                            <a href="https://github.com/dmelon199/reactProjects" target="_blank">
                                <img src="/icons/github.svg" className="filter-color" alt="GitHub Profile Link To Projects" title="GitHub"/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto: dmeline199@gmail.com" target="_blank">
                                <img src="/icons/email.svg" className="filter-color" alt="Link To Email Address" title="Email"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Hi