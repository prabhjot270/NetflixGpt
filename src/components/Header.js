import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';   

const Header = () => {
   const navigate= useNavigate();
   const dispatch=useDispatch();
   const user=useSelector((store)=>store.user)

   const handleSignOut=()=>{
     signOut(auth).then(()=>{
        // console.log("Sign-out successful.");
        // navigate("/")
     })
     .catch((error)=>{
        console.log("An error happened during sign-out:", error);
        navigate("/error")
     })
   }

   useEffect(() =>{
       
   const unsubscribe= onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in
      
       const {uid,email,displayName} = user;
        dispatch(addUser({uid :uid, email:email, displayName:displayName}));
       navigate("/browse");
     } else {
       // User is signed out then remove user from redux store
       dispatch(removeUser());    
       navigate("/");
     }
   });
   //Unsubscribe the listener on unmount
   return ()=> unsubscribe();
    },[])   
    
  return (
    <div className='absolute top-0 left-0  w-screen px-8 bg-gradient-to-b from-black to-transparent z-10 flex  items-center'>
    <img 
    className='w-44 bg-transparent'
    src='/images/Netflix_Logo_PMS.png'
    alt='logo'
    />
    { user && (
        <div className='flex justify-between items-center w-full px-8'>

      <div className='text-white flex space-x-6  cursor-pointer'>
        <p>Home</p>
        <p>TVShows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
        <p>Browse by Languages</p>
        </div>

        <div className='flex items-center space-x-4'>
        <img 
        className='w-15 h-10 rounded-xl'
        src='./images/UserIcon.jpeg'
        alt='usericon'
        />
      
        <button onClick={handleSignOut} className='text-white font-bold cursor-pointer ' type='button'> Sign Out</button>
        </div>
     </div>
    )}
     </div>
  );
};

export default Header;
