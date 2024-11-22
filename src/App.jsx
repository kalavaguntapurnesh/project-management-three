import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddProperties from "./pages/AddProperties";
import LandlordTenants from "./pages/LandlordTenants";
// import TenantLandlords from "./pages/TenantLandlords";
import AddLandlordLeaseAgreement from "./pages/AddLandlordLeaseAgreement";
import AddTenantLeaseAgreement from "./pages/AddTenantLeaseAgreement";
import Lease from "./pages/Lease";
import LeaseCreateForm from "./pages/LeaseCreateForm";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/pricing"
            element={
              <PublicRoute>
                <Pricing />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/privacy"
            element={
              <PublicRoute>
                <Privacy />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/dashboard/:id"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/addProperties/:id"
            element={
              <ProtectedRoute>
                <AddProperties />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/landlordTenants/:id"
            element={
              <ProtectedRoute>
                <LandlordTenants />
              </ProtectedRoute>
            }
          ></Route>

          {/* <Route
            path="/tenantsLandlords/:id"
            element={
              <ProtectedRoute>
                <TenantLandlords />
              </ProtectedRoute>
            }
          ></Route> */}

          <Route
            path="/addLeaseAgreement/:propertyId"
            element={
              <ProtectedRoute>
                <AddLandlordLeaseAgreement />
              </ProtectedRoute>
            }
          ></Route>

{/* /addTenantLeaseAgreement/${property._Id}/${user._id}/${landlordLeaseAgreementID} */}

        <Route
            path="/addTenantLeaseAgreement/:propertyID/:customerID/:landlordLeaseAgreementID"
            element={
              <ProtectedRoute>
                <AddTenantLeaseAgreement />
              </ProtectedRoute>
            }
          ></Route>

        <Route
            path="/lease-form/:propertyID"
            element={
              <ProtectedRoute>
                <Lease />
              </ProtectedRoute>
            }
          ></Route>

        <Route
            path="/lease-form/:propertyID/create-form"
            element={
              <ProtectedRoute>
                <LeaseCreateForm />
              </ProtectedRoute>
            }
          ></Route>

        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
