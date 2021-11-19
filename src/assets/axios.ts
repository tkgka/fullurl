console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

import axios from "axios";
import url from "./server_url";
const client = axios.create({
  baseURL: url.url,
});
/* eslint-disable */
export default function getTrack(TINYURL: string) {
  return client.get(`/?url=${TINYURL}`);
}
