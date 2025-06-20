import axios from "axios";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
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
