import axios from 'axios';
const geturl = async link => {
    try {
        return await axios({
            method: "get",
            url: link,
            maxRedirects: 0
        });
    } catch (e) {
        if (Math.trunc(e.response.status / 100) === 3) {
            console.log(e.response.headers.location);
            return geturl(e.response.headers.location);
        } else {
            throw e;
        }
    }
};




export default function getTrack(url: string) {
    return geturl(url)

}
