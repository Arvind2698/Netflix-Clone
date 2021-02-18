import axios from 'axios';
import {YouTubeAPIKey} from './Credentials';

export default axios.create({
    params:{
        key: YouTubeAPIKey,
        part:"snippet",
        maxResults:2
    },
    baseURL:"https://www.googleapis.com/youtube/v3",
});