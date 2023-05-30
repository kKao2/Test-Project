import { useContext } from "react"
import { ImagesContext } from "./Context"

export default function ImageSlide({ caption, index }) {
    const images = useContext(ImagesContext);
    return (
        <div className="fade">
            <img src={images[index].src} alt="img" />
            <div className="text">{caption}</div>
        </div>
    )
}