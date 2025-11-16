export const checkValidation=(email,password,name = null, isSignIn=null)=>{
    
    //If name is null, we are in sign-in 
    if(isSignIn){
        if(!email || !password){
        return "Please Enter Both Email and Password";
        }
       // return "Invalid Credentials"; 
       return null;
    }

    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // const isNameValid= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+\b/.test(name);
     
   let isNameValid = true;
  if (name) {
    isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+\b/.test(name);
  }

    if(!isEmailValid){
        return "Invalid Email Address";
    }
    if(!isPasswordValid){
        return "Invalid Password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    }
    if(name && !isNameValid){
        return "Invalid Name. Name should only contain alphabets and start with a capital letter.";
    }
    return null;

}