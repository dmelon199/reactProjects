
import React from "react"
import ImageRotate from "../components/ImageRotate"

const desktopImages = [
    { id: 1, name:'INDEX', url: '/images/desktop/lithia-index.jpg', height:'3152px' },
    { id: 2, name:'VLP', url: '/images/desktop/avondale-index.jpg', height:'3208px' },
    { id: 3, name:'VDP', url: '/images/desktop/ogara-index-1.jpg', height:'2004px' },
    { id: 4, name:'BRAND', url: '/images/desktop/carter-index.jpg', height:'2854px' },
]

const mobileImages = [
    { id: 5, name:'mobile-INDEX', url: '/images/mobile/lithia-mobile-index.jpg', height:'6674px' },
    { id: 6, name:'mobile-VLP', url: '/images/mobile/avondale-mobile-index.jpg', height:'4791px' },
    { id: 7, name:'mobile-VDP', url: '/images/mobile/saltlake-mobile-index.jpg', height:'4354px' },
]


function Lithia() {
    return (
        <div>
            <div className="body-content container-xl py-5">
                <h1>Lithia Motors Desktop and Mobile Mockups</h1>
                <ImageRotate images={desktopImages, mobileImages} />
            </div>
        </div>
    )
}


export default Lithia
