import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUserStatus } from '../redux/auth/authSelector';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,  
}) {
  const isLoggedIn = useSelector(getUserStatus);
  const shouldRedirect = isLoggedIn && restricted;
 
  return shouldRedirect ? <Navigate to={redirectTo}/> : children;    
}