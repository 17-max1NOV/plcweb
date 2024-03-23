import APILink from "../APILink";
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
export const loginFun = (data,navigate) => {
  return (dispatch) => {
    APILink.post(`login`,data)
      .then((response) => {
        if (response.data.status === "success") {
            toast.success(response.data.mess);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            setTimeout(() => {
                navigate('/');
              }, 2000);
       }else{
        toast.error(response.data.mess)
       }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const checkTokenAdmin = (data,navigate) => {
    return (dispatch) => {
      APILink.post(`login`,data)
        .then((response) => {
          if (response.data.status === "success") {
              toast.success(response.data.mess);
              localStorage.setItem('accessToken', response.data.accessToken);
              localStorage.setItem('refreshToken', response.data.refreshToken);
              setTimeout(() => {
                  navigate('/');
                }, 2000);
         }else{
          toast.error(response.data.mess)
         }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  };
  