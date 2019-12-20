import { httpConfig } from './config.service';


export const getPlayList = () => {
    const { APIRoot, palylistParts, maxResults, playlistId, APIKey } = httpConfig
    return fetch(`${APIRoot}?part=${palylistParts}&maxResults=${maxResults}&playlistId=${playlistId}&key=${APIKey}`)
        .then(response => response.json())
        .catch(error => error.json());
}

export const nextPage = (nextPageToken: string) => {
    const { APIRoot, palylistParts, maxResults, playlistId, APIKey } = httpConfig

    return fetch(`${APIRoot}?part=${palylistParts}&maxResults=${maxResults}&playlistId=${playlistId}&key=${APIKey}&pageToken=${nextPageToken}`)
        .then(response => response.json())
        .catch(error => error.json());
}