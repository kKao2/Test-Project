import "./styles.css";
import { useState } from "react";
import light from "./images/img_lights_wide.jpg";
import mountain from "./images/img_mountains_wide.jpg";
import nature from "./images/img_nature_wide.jpg";
import snow from "./images/img_snow_wide.jpg";
import ImageSlide from "./ImageSlide";
import { ImagesContext } from "./Context";

export default function App() {
    const images = [{ id: 1, src: light }, { id: 2, src: mountain }, { id: 3, src: nature }, { id: 4, src: snow }];
    const [index, setIndex] = useState(0);
    const activeID = (images.find((image) => image === images[index])).id;
    function nextImage() {
        if (index !== images.length - 1) {
            setIndex(index => index + 1);
        } else {
            setIndex(0);
        }
    }
    function prevImage() {
        if (index !== 0) {
            setIndex(index => index - 1);
        } else {
            setIndex(images.length - 1);
        }
    }
    function handleOnClick(id) {
        images.map((image, i) => {
            if (image.id === id) {
                setIndex(i);
            }
            return image;
        })
    }
    return (
        <ImagesContext.Provider value={images}>
            <div className="slideshow-container">
                <ImageSlide key={images[index].id} index={index} caption="Caption Text" />
                {/* <div className="fade" key={index}>
                    <img src={images[index]} alt="img" />
                    <div className="text">Caption Text</div>
                </div> */}
                <button className="next" onClick={() => nextImage()}>&#10095;</button>
                <button className="prev" onClick={() => prevImage()}>&#10094;</button>
                <div className="dot-container">
                    {images.map((image) => {
                        return (
                            <button 
                                className={image.id === activeID ? "dot active" : "dot"} 
                                key={image.id} 
                                onClick={() => handleOnClick(image.id)} 
                            />
                        )
                    })}
                </div>
            </div>
        </ImagesContext.Provider>
    )
}
