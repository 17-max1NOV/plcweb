import APILink from "../APILink";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListCmsTable, toggleModalFun, deatilDataFun,
  totalFun, pageFun, limitFun
} from "../../redux/acction/cmsAcction";
import * as XLSX from 'xlsx';
export const getListUser = (page=1, limit=10, search=null, fitler=null) => {
  return (dispatch) => {
    const searchParam = search !== null && typeof search === 'string' ? `&search=${search}` : '';
    const fitterParam = fitler !== null && typeof fitler === 'number' ? `&fitter=${fitler}` : '';
    const apiUrl = `staff/?page=${page}&limit=${limit}${searchParam}${fitterParam}`;
    APILink.get(apiUrl)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListCmsTable(response.data.results));
          // dispatch(totalFun(response.data.pagination.totalItems));
          // dispatch(pageFun(response.data.pagination.pageNow));
          // dispatch(limitFun(response.data.pagination.limit));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const addUser = (data,setFunctions,handleClose) => {
  return (dispatch) => {
    APILink.post(`staff/create`, data)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListUser());
          toast.success(response.data.mess);
          handleClose();
          Object.keys(setFunctions).forEach((key) => {
            setFunctions[key]('');
          });
          // dispatch(toggleModalFun(false));
          // dispatch(deatilDataFun(null));
        }
        else {
          toast.error(response.data.mess)
        }
      })
      .catch((error) => {
      });
  }
};
export const updateUser = (data,setFunctions,handleClose,id) => {
  return (dispatch) => {
    APILink.put(`staff/update/${id}`, data)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListUser());
          toast.success(response.data.mess);
          handleClose();
          Object.keys(setFunctions).forEach((key) => {
            setFunctions[key]('');
          });
          // dispatch(toggleModalFun(false));
          // dispatch(deatilDataFun(null));
        }
        else {
          toast.error(response.data.mess)
        }
      })
      .catch((error) => {
      });
  }
};
export const updateRoomType = (data, id) => {
  return (dispatch) => {
    APILink.put(`room/roomType/update/${id}`, data)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListRoomType());
          toast.success(response.data.mess);
          dispatch(toggleModalFun(false));
          dispatch(deatilDataFun(null));
        }
        else {
          toast.error(response.data.mess)
        }
      })
      .catch((error) => {
      });
  }
};
export const toggleStatusRoomType = (id) => {
  return (dispatch) => {
    APILink.put(`room/roomType/toggle/${id}`)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListRoomType());
          toast.success(response.data.mess);
        }
        else {
          toast.error(response.data.mess)
        }
      })
      .catch((error) => {
      });
  }
};
export const getListRoomType = (page = 1, limit = 10, search = null, fitter = null) => {
  return (dispatch) => {
    const searchParam = search !== null && typeof search === 'string' ? `&search=${search}` : '';
    const fitterParam = fitter !== null && typeof fitter === 'number' ? `&fitter=${fitter}` : '';
    const apiUrl = `room/roomType/?page=${page}&limit=${limit}${searchParam}${fitterParam}`;
    APILink.get(apiUrl)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(getListCmsTable(response.data.results));
          dispatch(totalFun(response.data.pagination.totalItems));
          dispatch(pageFun(response.data.pagination.pageNow));
          dispatch(limitFun(response.data.pagination.limit));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const exportExcelRoomType = () => {
  APILink.get(`room/roomType/?getAll=1`)
    .then((response) => {
      if (response.data.status === "success") {
        const nameFileExcel = useSelector((state) => state.cms.fileNameExcel);
        const data = response.data.results;
        console.log(data);
        if (data.length > 0) {
          const worksheet = XLSX.utils.json_to_sheet(data);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
          
          XLSX.writeFile(workbook, nameFileExcel + '.xlsx');
          console.log("Excel exported successfully!");
        } else {
          toast.warning("No data to export.");
          console.log("No data to export.");
        }

      }
      else {
        toast.error(response.data.mess)
      }
    })
    .catch((error) => {
    });
};
