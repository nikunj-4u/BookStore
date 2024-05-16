import React from 'react'
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';

const LoggingOut = () => {
  const[authUser,setAuthUser]=useAuth();
  function handleLogout(){
    setAuthUser(null);
    localStorage.setItem('userDetails',null);
    toast.success("Logged Out !")
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default LoggingOut
