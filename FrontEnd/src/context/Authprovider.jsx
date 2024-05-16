import React, { createContext, useCallback, useContext, useState } from 'react'
export const AuthContext=createContext();
const Authprovider = ({children}) => {
 const initialAuthUser=localStorage.getItem('userDetails');
 const [authUser,setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined);

return(
<AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
</AuthContext.Provider>
)
}
export default Authprovider
export const useAuth=()=>useContext(AuthContext);