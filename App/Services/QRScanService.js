import privateHttp from "./Http/privateHttp.config";

const QR = {
  scanQR: async ({ privateId, projectId }) => {
    let result = await privateHttp({
      method: "POST",
      url: "/qr/scan",
      data: {
        privateId,
        projectId,
      },
    });

    console.log("result: ", result);
    return result;
  },
  historyScanQR: async (clientId) => {
    let result = await privateHttp({
      method: "GET",
      url: `/client/${clientId}`,
    });
    console.log("result: ", result);
    return result;
  },
};
export default QR;
