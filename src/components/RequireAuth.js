import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserStatus } from "../redux/auth/authSelector";

export default function RequireAuth({children, redirectTo}){
  const isLoggedIn = useSelector(getUserStatus);
  
  if (isLoggedIn) {
    return children;
  }  
  return <Navigate to={redirectTo}/>;    
}