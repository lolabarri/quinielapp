import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
  withCredentials: true
});

export class PointsAPI {
  static errorHandler(e) {
    console.error("AUTH API ERROR");
    console.error(e);
    throw e;
  }

  static updatePoints() {
    return instance
      .post("/points/updatePoints")
      .then(res => res.data)
      .catch(PointsAPI.errorHandler);
  }
}
