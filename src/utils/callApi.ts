import { toast } from "react-toastify";
import API from "./API";


export const callApi = async (url: string, params: any) => {
  try {
    const token = localStorage.getItem("token");
    const lang = localStorage.getItem("language");
    const response = await API.post(`${url}`, params, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        lang: lang,
      },
    });

    return response.data || response;
  } catch (error: any) {
    console.log(error);
    
    if (error.response.status === 401) {
      window.location.reload();
      localStorage.removeItem("token");
    }
    toast.error(error.response.data.message);
    // toast(error);
    return error.response.data;
  }
};


export const loginApi = async (url: string, params: any) => {
  try {
    const response = await API.post(`/erp${url}`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      window.location.reload();
      localStorage.removeItem("token");
    }
    toast.error(error.response.data.message);
    toast(error);
  }
};

// export const fileUpload = async (url: string, params: any) => {
//   const token = localStorage.getItem("token");
//   try {
//     const response = await Api.post(url, params, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error: any) {
//     if (error.response.status === 401) {
//       window.location.reload();
//       localStorage.removeItem("token");
//     }
//     toast.error(error.response.data.message);
//     toast(error);
//   }
// };
