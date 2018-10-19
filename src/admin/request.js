import axios from "axios";

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    let ttl = parseInt(localStorage.getItem('ttl'));
    const dateNowInSeconds = Math.floor(Data.now() / 1000);
    const originalReauest = error.config;
    const marginOfTtl = 10;
    if (dateNowInSeconds > ttl - marginOfTtl && error.response.status === 401) {
      return axios.post('/refreshToken').then(response => {
        const token = response.data.token;
        ttl = Math.floor(Data.now() / 1000 + response.data.ttl);

        localStorage.setItem('token', token);
        localStorage.setItem('ttl', ttl);

        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalReauest.headers["Authorization"] = `Bearer ${token}`;

        return axios(originalReauest);
      })
    }
    return Promise.reject(error);
  }
);

export default axios;
