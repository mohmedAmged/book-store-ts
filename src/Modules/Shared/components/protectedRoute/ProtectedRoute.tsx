/* eslint-disable @typescript-eslint/no-explicit-any */

import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AuthContext } from '../../../../Constant/Context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props:any) {
  const {userData}:any =useContext(AuthContext)

  if (Cookies.get('token') || userData) {
    return(props.children)
  }else{
    return <Navigate to={'/'}/>
  }
}
