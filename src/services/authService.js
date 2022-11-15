import axios from "axios";

export const authService = {
  auth: async ({ email, password, type }) => {
    if (type === "logout") throw Error("User has been logged out.");

    if (type === "register")
      return axios.post("http://localhost:3000/register", {
        email,
        password,
      });
    return axios.post("http://localhost:3000/login", {
      email,
      password,
    });
  },
};
