import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetHelp from "./pages/GetHelp";
import Listing from "./pages/Listing";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/get-help' element={<GetHelp />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/sign-in' element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
