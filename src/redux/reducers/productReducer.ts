import { productRootState } from "../types";
import { GET_PRODUCTS, GET_CATEGORY, GET_BRANDS, PRODUCT_DETAIL,LOADING_DATA, CATEGORY_PRODUCT, BRAND_PRODUCT } from "../actions/productAction";
const initialStatetype: productRootState = {
    prodcuts: "",
    categories: "",
    brands: ""
}

const productReducer = (state = initialStatetype, action: any ) => {
    const {type , payload} = action;
    switch(type){
        case GET_PRODUCTS:
        return {
            ...state,
            isLoading: false,
            products: { ...payload },
        };
        case PRODUCT_DETAIL:
        return {
            ...state,
            isLoading: false,
            product: { ...payload },
        };
        case GET_CATEGORY:
        return {
            ...state,
            isLoading: false,
            categories: { ...payload },
        };
        case CATEGORY_PRODUCT:
        return {
            ...state,
            isLoading: false,
            products: { ...payload },
        };
        case GET_BRANDS:
        return {
            ...state,
            isLoading: false,
            brands: { ...payload },
        };

        case BRAND_PRODUCT:
        return {
            ...state,
            isLoading: false,
            products: { ...payload },
        };
        
        case LOADING_DATA:
        return {
            ...state,
            isLoading: true,
        };
    default:
        return state;

    }
};

export default productReducer;

