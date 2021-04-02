import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
    return (
        <div>
            <video className="video" src={coverVideo} autoPlay loop muted/>
        </div>
    )
}

export default Cover
