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

  register: async ({ name, email, password }) => {
    role = "CLIENT";
    let result = await publicHttp({
      method: "POST",
      url: "signup",
      data: {
        name,
        email,
        password,
        role,
      },
    });
    console.log("result: ", result);
    return result;
  },

  updatePassword: async ({ oldPassword, newPassword }) => {
    let result = await privateHttp({
      method: "PATCH",
      url: "updatePassword",
      data: {
        oldPassword,
        newPassword,
      },
    });
    console.log("result: ", result);
    return result;
  },

  forgetPassword: async ({ email }) => {
    let result = await publicHttp({
      method: "POST",
      url: "forgotPassword",
      data: {
        email,
      },
    });
    console.log("result: ", result);
    return result;
  },

  resetPassword: async ({ resetToken, email, newPassword }) => {
    let result = await publicHttp({
      method: "POST",
      url: "resetPassword",
      data: {
        resetToken,
        email,
        newPassword,
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
