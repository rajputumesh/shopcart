export type tokenState = {
        name: String;
        abilities: [];
        tokenable_id: number;
        tokenable_type: String;
        updated_at: String;
        created_at: String;
        id: number;
};

export type userState = {
        id: number;
        roleid: number;
        name: String;
        phone: String;
        email: String;
        created_at: String;
        updated_at: String;   
};

export type loginDateState = {
    //token: tokenState;
    user: userState;
}

export type signUpState = {
    //token: tokenState;
    user: userState;
}

export type AuthState = {
    loginData: loginDateState;
    //signUp:signUpState; 
    loggedIn: boolean;
    isLoading: boolean;
    errorMessage: String;   
};

export type CategoryType = {
    id: number; 
    name: string, 
    image:string
}

export type BrandType = {
    id: number; 
    name: string, 
    image:string
}

export type ProductType = {
    id: number; 
    name: string, 
    slug:string, 
    image:string, 
    price:number, 
    saleprice:number,
    short_description: string,
    description:string,
    brand:[],
    category:[],
}

export type productRootState = {
    prodcuts:any;
    categories:any;
    brands:any;
}

export type rootState = {
    user: AuthState;
}
