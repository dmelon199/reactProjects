
import React from "react"


import Header from '../components/Header';
import Footer from '../components/Footer';

function Lithia() {
    return (
        <div>
          <Header />
            <div className="body-content container-xl py-5">
                <div className="desktop-wrapper">
                    <h1>Desktop Mockup</h1>
                    <div className="desktop-skin">
                        <div className="skin-overlay" style={{backgroundImage: "url('/images/desktop.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
                        <div className="viewport">
                            <div className="desktop_screen">
                                <div className="scroll-wrap" tabIndex="5003">
                                    <div height="3152px">
                                        <img src="/images/desktop/lithia-index.jpg" height="3152px" width="1015px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-wrapper">
                    <h1>Mobile Mockup</h1>
                    <div className="mobile-skin">
                        <div className="mobile-skin-overlay" style={{backgroundImage: "url('/images/mobile.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
                        <div className="mobile-viewport">
                            <div className="mobile_screen">
                                <div className="mobile-scroll-wrap" tabIndex="5003">
                                    <div height="6674px">
                                        <img src="/images/mobile/lithia-mobile-index.jpg" height="6674px" width="360px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Lithia

// <div className="desktop-wrapper">
// <h1>Desktop Mockup</h1>
// <div className="px-5 py-3">
//     <img src="/images/desktop.png"/>
//     <div className="desktop-viewport">
//     <img src="/images/desktop/lithia-index.jpg"/>
//     </div>
// </div>
// </div>