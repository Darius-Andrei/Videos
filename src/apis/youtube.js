
import axios from 'axios';
const KEY='AIzaSyAI1zwENUDVKOQxEwUfX1cwUvIOS2yeoRA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});


