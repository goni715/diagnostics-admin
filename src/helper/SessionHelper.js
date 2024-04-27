

class SessionHelper {
    setToken(token){
        localStorage.setItem("token", token);
    }

    getToken(){
        return localStorage.getItem("token");
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }


    setEmail(Email){
        localStorage.setItem("email",Email)
    }
    getEmail(){
        return localStorage.getItem("email")
    }

    setOtp(otp){
        localStorage.setItem("otp",otp)
    }
    getOtp(){
        return localStorage.getItem("otp")
    }

    logout(){
        localStorage.clear();
        window.location.href="/login"
    }


}


export const {setToken, getToken, setUserDetails, getUserDetails,setEmail,getEmail,setOtp,getOtp,logout} = new SessionHelper();