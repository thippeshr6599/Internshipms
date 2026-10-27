
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Mainloginpage } from "./Components-Loginpage/Mainloginpage";
import { OTPforgetpassword } from "./Components-Loginpage/OTPforgetpassword";
import { Passwordresetsucess } from "./Components-Loginpage/Passwordresetsucess";
import { Forgetpassword } from "./Components-Loginpage/Forgetpassword";
import { Setnewpassword } from "./Components-Loginpage/Setnewpassword";
import { MentorRegistrationpage } from "./Components-Registration/MentorRegistrationpage";
import { AdminRegistration } from "./Components-Registration/AdminRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainloginpage />,
  },
  {
    path: "/otpforgetpassword",
    element: <OTPforgetpassword />,
  },
  {
    path: "/passwordresetsucess",
    element: <Passwordresetsucess />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/setnewpassword",
    element: <Setnewpassword />,
  },
  {
    path:"/MentorRegistrationpage",
    element: <MentorRegistrationpage/>,
  },
  {
    path:"/AdminRegistration",
    element: <AdminRegistration/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;