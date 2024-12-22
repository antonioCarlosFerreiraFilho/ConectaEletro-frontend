import { api, requestConfig } from "../utils/config";

// NEWSLETTER
const newSletter = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/NewSletter/", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (err) {
    console.log(err);
  }
};

const newSletterService = {

  newSletter,
};

export default newSletterService;