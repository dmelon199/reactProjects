import React, { useEffect, useRef, useState } from "react";


const ImageRotateMobile = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };

  return (
    <div>
			<div className="mobile-wrapper">
			<h2>Mobile:</h2>
				<div className="mobile-skin">
					<div className="mobile-skin-overlay" style={{backgroundImage: "url('/images/mobile.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
						<div className="mobile-viewport">
					 		<div className="mobile_screen">
								<div className="mobile-scroll-wrap" tabIndex="5003">
									<div className="selected-image-mobile" style={{ backgroundImage: `url(${selectedImage?.url})`, height:`${selectedImage?.height}` }}/>
								</div>
							</div>
						</div>
			 </div>
			</div>
			<div className="carousel mobile">
				<div className="carousel-images">
				{images &&
					images.map((mobileImages, idx) => (
					<div
						onClick={() => handleSelectedImageChange(idx)}
						style={{ backgroundImage: `url(${mobileImages.url})` }}
						key={mobileImages.id}
						className={`carousel-image mobile ${selectedImageIndex === idx && "carousel-image-selected"}`}
						ref={(el) => (carouselItemsRef.current[idx] = el)}
					/>
				))}
				</div>
			</div>
		</div>
	);
};

export default ImageRotateMobile;

