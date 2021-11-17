console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

import axios from "axios";
const client = axios.create({
  baseURL: "https://serve.oozoo.site/",
});
/* eslint-disable */
export default function getTrack(TINYURL: string) {
  return client.get(`/?url=${TINYURL}`);
}
