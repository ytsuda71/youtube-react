import axios from 'axios'

const KEY = process.env.React_APP_API_KEY

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            part: 'snippet',
            maxResuls: 40,
            key: KEY,
            regionCode: 'JP',
            type: 'video',
            chart: 'mostPopular'
        }
    })
}
