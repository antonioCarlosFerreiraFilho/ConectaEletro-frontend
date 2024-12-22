import { api, requestConfig } from "../utils/config";

// CONTACT
const newContact = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/Contact/", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (err) {
    console.log(err);
  }
};

const contactService = {

  newContact,
};

export default contactService;