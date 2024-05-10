import axios from "axios";

// Khi có nhiều export trong 1 file, thì cả file sẽ đc xem là {object}, còn với export default, thì khi import sẽ ko cần {}

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMzUiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.bUn442TSuudaoIFjClF2XVWW6Szct5iniENp3_-J9m0";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

export const MA_NHOM = "GP02";
