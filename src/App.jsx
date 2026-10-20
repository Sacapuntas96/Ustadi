import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import GetHelp from "./pages/GetHelp";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/get-help" element={<GetHelp/>}/>
      </Routes>
    </>
  )
}

export default App