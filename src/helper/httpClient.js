import axios from "axios";

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: `${process.env.API_URL_BACKEND}`,
  });

//   instance.interceptors.request.use(async (axiosConfig) => {
//     const token = await lineHelper.getAccessToken();

//     axiosConfig.headers.Authorization = `Bearer ${token}`;
//     return axiosConfig;
//   });

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
    //   const { response } = err;

    //   if (response.status === 401) {
    //     // console.warn(
    //     //   "authentication error code:",
    //     //   response.data.code,
    //     //   ", message:",
    //     //   response.data.message
    //     // );

    //     Router.push("/oa-selection");
    //   }

      return Promise.reject(err);
    }
  );

  return instance;
}

const httpClient = createAxiosInstance();

export default httpClient;
