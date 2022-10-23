import axios from "axios";

const baseUrlBest = "https://www.reddit.com/r/best.json?limit=5";
const baseUrlHots = "https://www.reddit.com/r/GLOBAL/hot.json?limit=5";
const baseUrlNews = "https://www.reddit.com/r/GLOBAL/new.json";
const baseUrlRisings = "https://www.reddit.com/r/GLOBAL/rising.json?limit=5";
const baseUrlControversial =
  "https://www.reddit.com/r/Global/controversial.json";

const getBest = async () => {
  const { data } = await axios.get(baseUrlBest);
  return data;
};
const getHost = async () => {
  const { data } = await axios.get(baseUrlHots);
  return data;
};
const getNews = async () => {
  const { data } = await axios.get(baseUrlNews);
  return data;
};
const getRisings = async () => {
  const { data } = await axios.get(baseUrlRisings);
  return data;
};
const getControversial = async () => {
  const { data } = await axios.get(baseUrlControversial);
  console.log(data);
  return data;
};
const getColor = async (color) => {
  const data = color;

  return data;
};

export default {
  getBest,
  getHost,
  getNews,
  getRisings,
  getControversial,
  getColor,
};
