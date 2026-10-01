import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Mainloginpage } from './Components-Loginpage/Mainloginpage';
import { OTPforgetpassword } from './Components-Loginpage/OTPforgetpassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainloginpage/>,
  },
  {
    path:"/OTPforgetpassword",
    element: <OTPforgetpassword/> ,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;