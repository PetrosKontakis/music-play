class VideoPageContent {
    totalResults: number | undefined;
    resultsPerPage: number | undefined;
    nextPageToken: string | undefined;

    constructor(videoResponse: any | undefined) {
        if(!videoResponse){
            return;
        }
        const { pageInfo, nextPageToken } = videoResponse;
        this.totalResults = pageInfo.totalResults;
        this.resultsPerPage = pageInfo.resultsPerPage;
        this.nextPageToken = nextPageToken;
    }
}

export default VideoPageContent;