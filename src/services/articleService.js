import { api, requestConfig } from "../utils/config";

// SHOW ARTICLES
const allArticle = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Article/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// GET ARTICLE
const getArticle = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/Article/getArticle/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// COMMENTS
const commentArticle = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/Article/comment/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// SEARCH
const searchArticle = async (query) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/Article/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const articleService = {
  allArticle,
  getArticle,
  commentArticle,
  searchArticle,
};

export default articleService;
