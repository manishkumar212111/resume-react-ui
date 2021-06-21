// const BASE_URL = 'http://localhost:5000/';
const BASE_URL = 'https://obscure-harbor-22627.herokuapp.com/';
const IMAGE_URL = "https://ik.imagekit.io/i2wp0fsg8dx/";

const getImageURL = (imgName) => IMAGE_URL.concat(imgName);

const EndPoints = {
    Users: {
        url: 'api/users?',
    },
    Login : {
        url : "api/auth/login"
    },
    Plans : {
        url : "api/common/plans?status=true"
    },
    Plans : {
        url : "api/common/plans"
    },
    Payment_Post : {
        url : "api/plan/stripe/charge"
    },
    Register : {
        url : "api/auth/register"
    },
    Forgot_Password : {
        url : "api/auth/forgot-password"
    },
    ResetPassword : {
        url : "/api/auth/reset-password"
    },
    GetUserById : {
        url : "/api/users"
    },
    UpdateUserById : {
        url : "/api/users"
    },
    changePassword : {
        url : "/api/user/password"
    },
    changeEmail : {
        url : "/api/user/email"
    },
    DeleteAccount : {
        url : "/api/users"
    },
    GoogleLoginValidate : {
        url : "/api/auth/google/validate"
    },
    Auth: {
        url : "api/user/auth"
    },
    Enquiry: {
        url : "api/common/enquiry"
    },
    Blog: {
        url : "api/common/blog"
    },
    Tool: {
        url : "api/product"
    },
    ResumeList : {
        url : "api/product/user"
    },
    Resume : {
        url : "api/product"
    },
    ProductDownLoad : {
        url : "api/common/downloads/api"
    },
    download : {
        url : 'api/common/template'
    }
};

export { BASE_URL, EndPoints, getImageURL };