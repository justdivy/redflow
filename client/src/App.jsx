import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";

import DashboardLayout from "./components/DashboardLayout.jsx";
import UserDashboard from "./pages/dashboards/UserDashboard.jsx";
import DonorDashboard from "./pages/dashboards/DonorDashboard.jsx";
import PatientDashboard from "./pages/dashboards/PatientDashboard.jsx";
import HospitalDashboard from "./pages/dashboards/HospitalDashboard.jsx";

import BloodRequestTable from "./pages/BloodRequestTable.jsx";
import Footer from "./components/Footer.jsx";
import ProfilePage from "./pages/Profile.jsx";
import ContactUs from "./pages/ContectUs.jsx";
import AmbulanceService from "./pages/AmbulanceService.jsx";
import About from "./pages/About.jsx";
import AIChatBox from "./components/AIChatBox.jsx";
import NotFound from "./pages/NotFound.jsx";
import Loader from "./components/Loader.jsx";

import Admin from "./pages/Admin.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* ===== Public Routes ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request" element={<BloodRequestTable />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ambulance" element={<AmbulanceService />} />
          <Route path="/about" element={<About />} />
          <Route path="/loader" element={<Loader />} />

          {/* ===== Admin Routes ===== */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlayout" element={<AdminLayout />} />

          {/* ===== Dashboard Layout ===== */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Default redirect */}
            <Route
              index
              element={
                <Navigate
                  to={`/dashboard/${localStorage.getItem("role")}`}
                  replace
                />
              }
            />

            <Route
              path="user"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="donor"
              element={
                <ProtectedRoute allowedRoles={["donor"]}>
                  <DonorDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="patient"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="hospital"
              element={
                <ProtectedRoute allowedRoles={["hospital"]}>
                  <HospitalDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="profile"
              element={
                <ProtectedRoute
                  allowedRoles={["user", "donor", "patient", "hospital"]}
                >
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Shortcut */}
          <Route
            path="/patient"
            element={<Navigate to="/dashboard/patient" replace />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <AIChatBox />
        <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
