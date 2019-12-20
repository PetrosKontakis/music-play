import React, { Component } from 'react';
import VideoListItemComponent from '../VideoListItem/videoListItem.component';
import { getPlayList, nextPage } from '../../services/httpActions.service';
import VideoPageContent from '../../services/models/videoPageContent.model';
import VideoItem from '../../services/models/videoItem.model';
import "./listContainer.component.style.scss";
import VideoDetails from '../VideoDetails/videoDetails.component';
/**
 * State Types
 */
type listContainerState = {
    videos: Array<VideoItem>
    pageInfo: VideoPageContent,
    selectedVideo: VideoItem | null,
    dataLoading: boolean,
    serverError: string
}

/**
 * Name: ListCotainerComponent
 * Discription: ListCotainerComponent is a container componet,
 *              this component execute http request and serving up the view
 */
class ListContainerComponent extends Component<{}, listContainerState>{

    //  Componet initialization
    constructor(props: any) {
        super(props);
        this.state = {
            videos: [],
            pageInfo: new VideoPageContent(null),
            dataLoading: false,
            serverError: "",
            selectedVideo: null
        }
    }

    // On component mount execute http request 
    componentDidMount() {
        this.setState({ dataLoading: true })
        getPlayList().then(
            this.onDataRecieved
        ).catch(
            this.onDataError
        )

    }

    // On load more event execute http request
    loadMore = () => {
        this.setState({ dataLoading: true })
        // Check for next pages
        if (!this.state.pageInfo.nextPageToken) {
            console.error("There is no nextPageToken")
            return;
        }
        nextPage(this.state.pageInfo.nextPageToken).then(
            this.onDataRecieved
        ).catch(
            this.onDataError
        )
    }

    // Error handling, TODO: Display erros on dom
    onDataError = (error: any) => {
        console.error(error)
        this.setState({ dataLoading: false, serverError: JSON.stringify(error) })
    }

    // Data handling
    onDataRecieved = (response: any) => {
        this.setState({
            dataLoading: false,
            serverError: "",
            pageInfo: new VideoPageContent(response),
            videos: [...this.state.videos, ...response.items.map((item: any) => new VideoItem(item))]
        })
    }

    // Handle on scroll event
    handleOnScroll = (e: any) => {
        const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop === clientHeight && this.canLoadMore()) {
            this.loadMore()
        }
    }

    // Handle on video select
    handleVideoSelect = (video: VideoItem | null) => {
        this.setState({
            selectedVideo: video
        })
    }

    // Internal check 
    canLoadMore = () => {
        const { pageInfo, dataLoading } = this.state
        if (!pageInfo.nextPageToken || dataLoading) {
            return false;
        }
        return true;
    }

    // Renderer
    renderLoadMore = () => {
        return (<div className={this.canLoadMore() ? 'visible' : 'invisible'}>
            <div className="text-center">
                <button className="inherit-button" onClick={this.loadMore}>LOAD MORE</button>
            </div>
        </div>)
    }

    // Renderer, TODO: Add loader on screen
    renderLoading = () => {
        const { dataLoading } = this.state
        if (dataLoading) {
            return (<div className="">
                {/* <h1>loading</h1> */}
            </div>)
        }
    }

    // Main Renderer 
    render() {

        const { videos, selectedVideo } = this.state;
        if (selectedVideo) {
            return (
                <div className="scrollable-container">
                    <VideoDetails video={selectedVideo} onCloseCallBack={this.handleVideoSelect} />
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="scrollable-container" onScroll={this.handleOnScroll}>
                    <div className="container">
                        <div className="row">
                            {videos.map((video, key) => (<div className="col-md-4" key={key}>
                                <VideoListItemComponent video={video}
                                    onClickCallBack={this.handleVideoSelect} />
                            </div>))}
                        </div>
                        {this.renderLoading()}
                        {this.renderLoadMore()}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default ListContainerComponent;