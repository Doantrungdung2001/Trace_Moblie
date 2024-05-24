import axios from "axios";
import { baseUrl } from "./baseUrl";
import token from "../../Utils/Token";

console.log("Base: ", baseUrl);

const privateHttp = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const updateAuthorizationHeader = async (config) => {
  await token.initializeToken();
  const accessToken = token.getAccessToken();
  const refreshToken = token.getRefreshToken();
  console.log("accessToken:", accessToken);
  console.log("refreshToken:", refreshToken);
  if (accessToken) {
    config.headers["authorization"] = accessToken;
    config.headers["x-rtoken-id"] = refreshToken;
  }
  return config;
};

privateHttp.interceptors.request.use(
  async (config) => {
    return updateAuthorizationHeader(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error: ", error);
    if (
      (error.response?.status === 401 &&
        error.response?.data?.message === "Old token") ||
      (error.response?.status === 401 &&
        error.response?.data?.message === "Invalid request") ||
      (error.response?.status === 404 &&
        error.response?.data?.message === "Not found keyStore") ||
      (error.response?.status === 500 &&
        error.response?.data?.message ===
          "Command find requires authentication")
    ) {
      // alert('Need to login')
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default privateHttp;
