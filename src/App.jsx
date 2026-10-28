// import { useState } from 'react'
import "./App.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AssignmentPage from "./pages/AssignmentPage";
import NavBar from "./components/Navbar";
import * as React from "react";
import { Route, Routes, Link, Router, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./useAuth";
import AssignmentList from "./components/AssignmentsList";
import RequireAuth from "./RequireAuth";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard/*"
              element={<RequireAuth>
                <StudentDashboard/>
              </RequireAuth>}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      {/* <StudentDashboard /> */}
    </>
  );
}

export default App;
