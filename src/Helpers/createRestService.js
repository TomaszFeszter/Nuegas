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
  getAll: async (config) => {
    return axios.get(baseUrl + endpoint, config);
  },
  createOne: async (config) => {
    return axios.post(baseUrl + endpoint, config);
  },
  getOne: async (id, { data, config }) => {
    return axios.get(baseUrl + endpoint + "/" + id, data, config);
  },
  updateOne: async (id, { data, config }) => {
    return axios.put(baseUrl + endpoint + "/" + id, data, config);
  },
  deleteOne: async (id, { data, config }) => {
    return axios.delete(baseUrl + endpoint + "/" + id, data, config);
  },
});
