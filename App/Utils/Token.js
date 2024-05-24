// token.js
import UserInfoAsyncStorage from "./UserInfoAsyncStorage";

let inforUser = {};

const fetchUserInfo = async () => {
  try {
    const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
    console.log("-------result-tokens------", result.tokens);
    Object.assign(inforUser, result.tokens);
  } catch (error) {
    console.error("Error:", error);
  }
};

const initializeToken = async () => {
  await fetchUserInfo();
};

const getAccessToken = () => {
  return inforUser.accessToken;
};

const getRefreshToken = () => {
  return inforUser.refreshToken;
};

const token = {
  initializeToken,
  getAccessToken,
  getRefreshToken,
};

export default token;
