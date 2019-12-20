class VideoItem {

    videoId: string;
    videoPublishedAt: string;
    title: string;
    description: string;
    descriptionEllips: string;
    thumbDefaultUrl: string;
    constructor(videoResponse: any) {
        const { contentDetails, snippet } = videoResponse;
        this.videoId = contentDetails.videoId;
        this.videoPublishedAt = contentDetails.videoPublishedAt;
        this.title = snippet.title;
        this.description = snippet.description;
        this.thumbDefaultUrl = "/images/default.jpg";
        if (snippet.thumbnails && snippet.thumbnails.medium && snippet.thumbnails.medium.url) {
            this.thumbDefaultUrl = snippet.thumbnails.medium.url;
        }
        if (this.description.length > 60) {
            this.descriptionEllips = snippet.description.slice(0, 60).concat("...");
        } else {
            this.descriptionEllips = this.description;
        }

    }
}
export default VideoItem;