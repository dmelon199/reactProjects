
import React from "react"

function SaltLake() {
    return (
        <div>
            <div className="body-content container-xl py-5">
                <h1>Salt Lake City Motorcars Desktop and Mobile Mockups</h1>
                <div className="desktop-wrapper py-5">
                    <h2>Desktop:</h2>
                    <div className="desktop-skin">
                        <div className="skin-overlay" style={{backgroundImage: "url('/images/desktop.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
                        <div className="viewport">
                            <div className="desktop_screen">
                                <div className="scroll-wrap" tabIndex="5003">
                                    <div height="auto">
                                        <img src="/images/desktop/saltlake-index.jpg" height="auto" width="1015px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-wrapper">
                    <h2>Mobile:</h2>
                    <div className="mobile-skin">
                        <div className="mobile-skin-overlay" style={{backgroundImage: "url('/images/mobile.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
                        <div className="mobile-viewport">
                            <div className="mobile_screen">
                                <div className="mobile-scroll-wrap" tabIndex="5003">
                                    <div height="6674px">
                                        <img src="/images/mobile/saltlake-mobile-index.jpg" height="auto" width="365px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SaltLake
