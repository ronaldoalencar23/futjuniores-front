import axios from "axios";

const apiURLs = {
  development: "https://futjunioresapi.onrender.com/api",
  production: "https://futjunioresapi.onrender.com/api",
};

const api = axios.create({
  baseURL: apiURLs[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer fb2ea0a780115b29bc9bdf59dffcaf6be8ce7f922b1022c7c3bcaf6060c43eb89f0de004cca2b676abe0005c3a26c201f0bbf040441350b248ae0f41073c020db015c945a9ae1c17115fa9f7e815b8cf3bfe56ca95ef6c82392d02ba46f4a32c43c9637ae506a15b6d9c4640dda9bf98d3d0fa74ce7f4d38c2394580506d4531`,
  };
  return config;
});

export { api };
