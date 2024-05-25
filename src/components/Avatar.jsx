
import "./Avatar.css"

export function Avatar({ imageSource, imageName="", imageWidth="", imageHeight="" }) {
    return (
        <img src={imageSource} alt={imageName} width={imageWidth} height={imageHeight}/>
    )
}

