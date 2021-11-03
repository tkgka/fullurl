import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:8080/',
});


export default function getTrack(TINYURL: string) {
  return client.get(`/?url=${TINYURL}`);
}
