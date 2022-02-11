export const GET_PRODUCTS = 'user/GET_PRODUCTS';
export const PRODUCT_DETAIL = 'user/PRODUCT_DETAIL';
export const GET_CATEGORY = 'user/GET_CATEGORY';
export const GET_BRANDS= 'user/GET_BRANDS';
export const LOADING_DATA= 'user/LOADING_DATA';
export const CATEGORY_PRODUCT= 'user/CATEGORY_PRODUCT';
export const BRAND_PRODUCT= 'user/BRAND_PRODUCT';

export const getProductList = (payload: any) => {
    return {
        type: GET_PRODUCTS,
        payload,
    };
};

export const getProduct = (payload: any) => {
    return {
        type: PRODUCT_DETAIL,
        payload,
    };
};

export const getCategories = (payload: any) => {
    return {
        type: GET_CATEGORY,
        payload,
    };
};

export const categoryProduct = (payload: any) => {
    return {
        type: CATEGORY_PRODUCT,
        payload,
    };
};

export const getBrands = (payload: any) => {
    return {
        type: GET_BRANDS,
        payload,
    };
};

export const brandProduct = (payload: any) => {
    return {
        type: BRAND_PRODUCT,
        payload,
    };
};

export const loadingdata = (payload: any) => {
    return {
        type: LOADING_DATA,
        payload,
    };
};