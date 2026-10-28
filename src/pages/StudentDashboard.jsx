import AssignmentList from "../components/AssignmentsList";
import NavBar from "../components/Navbar";
import AssignmentPage from "./AssignmentPage";
import { Routes, Route } from "react-router-dom";

export default function StudentDashboard({ page }) {
  console.log(page);

  return (
    <>
      <NavBar />
      <br />

      <div>
        <Routes>
          <Route path="/" element={<AssignmentList />} />
          <Route path="/details/:ids" element={<AssignmentPage page="list" />} />
        </Routes>
        {/* content goes here. Will switch this div based on tabs in navigation */}
      </div>
    </>
  );
}
