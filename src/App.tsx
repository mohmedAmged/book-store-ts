import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './Modules/Shared/components/authLayoutSec/AuthLayout';
import NotFound from './Modules/Shared/components/notFoundSec/NotFound';
import Login from './Modules/AuthModule/Components/loginSec/Login';
import Register from './Modules/AuthModule/Components/registerSec/Register';
import ForgetPassword from './Modules/AuthModule/Components/forgetPasswordSec/ForgetPassword';
import ResetPassword from './Modules/AuthModule/Components/resetPasswordSec/ResetPassword';
import ChangePassword from './Modules/AuthModule/Components/changePasswordSec/ChangePassword';
import MasterLayout from './Modules/Shared/components/masterLayoutSec/MasterLayout';
import Home from './Modules/HomeModule/components/home/Home';
import CartDetails from './Modules/CartModule/components/cart/CartDetails';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './Modules/Shared/components/protectedRoute/ProtectedRoute';
function App() {
const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Login />},
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},
      {path: 'forget-password', element: <ForgetPassword />},
      {path: 'reset-password', element: <ResetPassword />},
      {path: 'change-password', element: <ChangePassword />},
    ]
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><MasterLayout /></ProtectedRoute> ,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: 'home', element: <Home />},
      {path: 'cart', element: <CartDetails />},
    ]
  }
])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}>
      </RouterProvider>
    </>
  )
}

export default App
