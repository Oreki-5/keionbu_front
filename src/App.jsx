import "./App.css";
import LoginPage from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./useAuth";
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
              element={
                <RequireAuth>
                  <StudentDashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
