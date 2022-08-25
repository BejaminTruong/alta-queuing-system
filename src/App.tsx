import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import "antd/dist/antd.css";
import ResetPassword from "./pages/ResetPassword";
import Device from "./pages/Device/Device";
import Progression from "./pages/Progression/Progression";
import Service from "./pages/Service/Service";
import Report from "./pages/Report/Report";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/device" element={<Device />} />
          <Route path="/service" element={<Service />} />
          <Route path="/progression" element={<Progression />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
