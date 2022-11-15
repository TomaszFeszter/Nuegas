import axios from "axios";

const baseUrl = "http://localhost:3000/";

// export const createQuery = ({ method = "get", endpoint, data }) => {
//   return axios({
//     method: method,
//     url: `${baseUrl}${endpoint}`,
//     data: data,
//   });
// };

export const createService = (endpoint) => ({
  getAll: async (options) => {
    return axios.get(baseUrl + endpoint, options);
  },
  createOne: async (options) => {
    return axios.post(baseUrl + endpoint, options);
  },
  getOne: async (id, options) => {
    return axios.get(baseUrl + endpoint + "/" + id, options);
  },
  updateOne: async (id, options) => {
    return axios.put(baseUrl + endpoint + "/" + id, options);
  },
  deleteOne: async (id, options) => {
    return axios.delete(baseUrl + endpoint + "/" + id, options);
  },
});
