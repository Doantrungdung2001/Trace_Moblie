import privateHttp from "./Http/privateHttp.config";
import publicHttp from "./Http/publicHttp.config";

const AUTH = {
  login: async ({ email, password }) => {
    let result = await publicHttp({
      method: "POST",
      url: "login",
      data: {
        email,
        password,
      },
    });

    console.log("result: ", result);
    return result;
  },

  logout: async () => {
    let result = await privateHttp({
      method: "POST",
      url: "/logout",
    });

    return result;
  },
};
export default AUTH;
