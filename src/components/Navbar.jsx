import { Link } from "react-router-dom";
export default function NavBar({ state }) {
  return (
    <>
      <div>
       
        <Link to={{ pathname: "/dashboard" }}>
          <button type="button">Dashboard</button>
        </Link>
        <Link to={{ pathname: "/dashboard/teachers" }}>
          <button type="button">Teachers</button>
        </Link>

        <button type="profile">Profile (wip)</button>
      </div>
    </>
  );
}
