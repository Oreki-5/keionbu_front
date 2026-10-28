import { Link } from "react-router-dom";
export default function AssignmentTile({ assignment }) {
  console.log(assignment);

  return (
    <>
      <div>
        <label htmlFor="">Assignment: {assignment.id}</label>
        <div>
          <p>status: {assignment.status}</p>
        </div>

        <Link
          to={{
            pathname: "/dashboard/details/" + assignment.id
          }}
          state={{assObj:assignment}}
        >
          <button type="button">View Assignment</button>
        </Link>
      </div>
    </>
  );
}
