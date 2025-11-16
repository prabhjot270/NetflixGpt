import React from 'react'
import { useState,useRef } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
 
    const [isSignInForm, setIsSignInForm ]=useState(true);
    const [errorMessage, setErrorMessage]=useState(null);
   
    const dispatch=useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=(e)=>{
        //Validate the form data
       //checkValidation(email, password)
       e.preventDefault(); // Prevent form reload
       console.log(email.current.value) ;
       console.log(password.current.value) ;

       const nameValue= isSignInForm ? null :  name.current.value.trim(); // string or null
       console.log(nameValue);  
        
      const msg= checkValidation(email.current.value.trim(), password.current.value.trim(), nameValue,isSignInForm);
     // console.log(msg);
     setErrorMessage(msg);
      if(msg){ //if there is an error message then return 
        return ;
      }


    //Else Sign In or Sign Up the user
       if(!isSignInForm){
        //Sign Up Form Logic 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
       displayName: name.current.value 
      }).then(() => {
        //dispatch action to add user
        const {uid,email,displayName} = auth.currentUser;
         dispatch(addUser({uid :uid, email:email, displayName:displayName}));
        //  navigate("/browse");
      }).catch((error) => {
        setErrorMessage(error.message);
    });
       // console.log(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode,"+",errorMessage);
     });
}
 else{
        //Sign In Form Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value) 
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       // console.log(user);
        // console.log("Navigation starting...");
        //  navigate("/browse");
      })
     .catch((error) => {
      const errorCode = error.code;
     const errorMessage = error.message;
      setErrorMessage(errorCode,"+",errorMessage);
     });

       }
    }
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
    <Header/>
      <div className='absolute w-full h-full z-0'>
        <img src='/images/background.jpg'
         alt='background'
         />
         </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 cursor-pointer'> {isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && (<input  ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className='text-red-400'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} type='button'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='py-4 cursor-pointer text-blue-500' onClick={toggleSignInForm}> {isSignInForm ? " New To Netflix?  Sign Up Now." : "Already registered? Sign In Now." } </p>
         </form>
    </div>
  );
};

export default Login;
