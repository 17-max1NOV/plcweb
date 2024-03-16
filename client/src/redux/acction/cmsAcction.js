export const getListCmsTable = (data) => ({
    type: 'GETLIST',
    payload: data,
});
export const toggleModalFun = (item) => ({
    type: 'TOGGELMODAL',
    payload: item,
});
export const deatilDataFun = (item) => ({
    type: 'DATADEAITL',
    payload: item,
});

export const totalFun = (item) => ({
    type: 'TOTAL',
    payload: item,
});
export const pageNowFun = (item) => ({
    type: 'PAGENOW',
    payload: item,
});
export const limitFun = (item) => ({
    type: 'LIMIT',
    payload: item,
});
export const pageFun = (item) => ({
    type: 'PAGE',
    payload: item,
});
export const updateNameExcelFun = (item) => ({
    type: 'UPDATEFILENANMEXCEL',
    payload: item,
});