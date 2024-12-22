import { api, requestConfig } from "../utils/config";

// PROFILE
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(api + "/Users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// EDIT
const editUser = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(api + "/Users/edit", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  editUser,
};

export default userService;
