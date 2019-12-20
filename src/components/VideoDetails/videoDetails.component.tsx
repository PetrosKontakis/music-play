import React from "react";
import VideoItem from "../../services/models/videoItem.model";
import YouTube from 'react-youtube';
import "./videoDetails.component.style.scss";
import Moment from "react-moment";

type videoDetailsProps = {
    video: VideoItem,
    onCloseCallBack: Function
}
/**
 * Name:  VideoDetails
 * Description: Presentetional component
 */
const VideoDetails: React.FC<videoDetailsProps> = ({ video, onCloseCallBack }) => {

    const opts = {
        playerVars:{
            origin: window.location.href
        }
    }
    const handleOnBackClick = () => {
        onCloseCallBack();
    }

    //  TODO: Expose playing to title bar
    const handleOnStateChange = (event: any) => {
        // console.log("Playing", event)
    }

    // Main renderer
    return (
        <div className="container video-details-component">
            <div className="row">
                <div className="col-md-8 mb-5">
                    <div className="embed-responsive embed-responsive-16by9">
                        <YouTube
                            className="embed-responsive-item "
                            videoId={video.videoId}
                            onStateChange={handleOnStateChange}
                            opts={opts}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="video-details-title">{video.title}</h3>
                    <p className="video-deatails-published">
                        Published on {" "}
                        <Moment format="MMM DD,YYYY">
                            {video.videoPublishedAt}
                        </Moment>
                    </p>
                    <p className="video-details-description">
                        {video.descriptionEllips}
                    </p>

                    <p className="video-details-back">
                        <button className="inherit-button" onClick={handleOnBackClick}>
                            <img src="./images/back_arrow.svg" alt="back to list" /> Back to list
                        </button>
                    </p>

                </div>
            </div>

        </div>
    );
}

export default VideoDetails;