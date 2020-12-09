import axios from 'axios';

export default axios.create({
  baseURL: "https://wpp-fire-detection-ml.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});