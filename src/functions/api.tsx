//========================= get all=============
const APIURL = "http://merishop.zaibainfotech.com/api/";

//=============================================================

export const gatproducts = async () => {
    const response = await fetch(APIURL+'product/latest');
    const productlist =await response.json();
    return productlist.data;
};

export const getbrands = async () => {
    const res = await fetch(APIURL+'brands/latest');
    const brandlist =await res.json();
    return brandlist;
};

export const getcategory = async () => {
    const response = await fetch(APIURL+'category/latest');
    const category:any =await response.json();
    return category;
}; 

//============================ get by id ==========================

export const categoryproduct = async (id:any) => {
    const response = await fetch(APIURL+'category/details/'+id);
    const products:any =await response.json();
    console.log('api product = '+products);
    return products;
}; 

export const brandproduct = async (id:any) => {
    const response = await fetch(APIURL+'brand/details/'+id);
    const products:any =await response.json();
    return products;
};

export const productdetail = async (proid:any) => {
    const response = await fetch(APIURL+'product/'+proid);
    const product:any =await response.json();
    return product;
};

