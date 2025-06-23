import axios from "axios";

// 9bb2f7d3dfca419c8f2e23e692fdfb32
const API_KEY = "9bb2f7d3dfca419c8f2e23e692fdfb32"; //api 키는 .env 파일에 저장 ㄱㄱ 이렇게 두면 깃허브에서 사람들이 가져감
const BASE_URL = "https://api.rawg.io/api";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const fetchGameInfo = async (slug) => {
  const res = await api.get(`/games/${slug}`);
  return res.data;
};

export const fetchGameImages = async (gameId) => {
  const res = await api.get(`/games/${gameId}/screenshots`);
  return res.data.results;
};
