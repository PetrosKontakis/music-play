import React from "react";
import "./videoListItem.component.style.scss";
import VideoItem from "../../services/models/videoItem.model";
import PreloadImage from "../PreloadImage/preloadImage.component";
import Moment from 'react-moment';
// Proptypes types
type VideoListItemProps = {
    video: VideoItem,
    onClickCallBack: Function
}

/**
 * Name: VideoListItemComponent
 * Description: Presentational component
 */
const VideoListItemComponent: React.FC<VideoListItemProps> = ({ video, onClickCallBack }) => {

    // Internal function 
    const handleOnClick = () => {
        onClickCallBack(video)
    }

    // Main renderer
    return (

        <div className="video-list-item card mb-5" onClick={handleOnClick}>
            <div className="card-header-container" >
                <PreloadImage src={video.thumbDefaultUrl} alt={video.title} />
                <div className="card-img-overlay">
                    <div className="row">
                        <div className="col-sm-9">
                            <h5 className="card-title">{video.title}</h5>
                        </div>
                        <div className="col-sm-3">
                            <button className="inherit-button play-button">
                                <img src="./images/play_button.svg" alt="play video" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body mt-2">
                <h5 className="card-sub-title">
                    Published on {" "}
                    <Moment format="MMM DD,YYYY">
                        {video.videoPublishedAt}
                    </Moment>
                </h5>
                <p className="card-text">{video.descriptionEllips}</p>
            </div>
        </div>
    )
}

export default VideoListItemComponent;