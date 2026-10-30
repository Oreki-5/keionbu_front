import { useParams, useLocation } from "react-router-dom";
import useAuth from "../useAuth";
export default function AssignmentPage({ qwer }) {
  const ids = useParams();
  console.log();
  const location = useLocation();
  const assignment = location.state.assObj;
  const { token } = useAuth();

  const handleDownload = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <div>Go back button</div>

      <div style={{}}>
        {/* main layout */}
        <div>
          {/* Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR2oFFbvNd0HAeenhA0wtJ31E4RE5z81pfR99Rs8d4pUxR5vsKCnahro&s=10"
            alt=""
          />
        </div>
        <div>
          {/* Details and Actions */}
          <div>
            {/* Details */}
            <h3>{assignment.title}</h3>
            <p>{assignment.desc}</p>
            <p>Assigned By: {assignment.author}</p>
            <p>Assigned Date: {assignment.createdDate}</p>
          </div>
          <div>
            {/* Actions */}
            <button type="submit">Download Assignment</button>
            <button type="submit">Submit Assignment</button>
          </div>
        </div>
      </div>
    </>
  );
}
