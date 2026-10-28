import AssignmentTile from "./AssignmentTile";

export default function AssignmentList({ state }) {
  const a1 = {
    id: 1,
    title: "Guitar basics 1",
    desc: "Its a basic exercise for beginners",
    author: "Oreki5",
    createdDate: "25/02/2004",
    status : "pending"
  };
  const a2 = {
    id: 2,
    title: "Guitar basics 2",
    desc: "Its a basic exercise for beginners 2",
    author: "Oreki5",
    createdDate: "25/02/2005",
    status : "completed"
  };
  const a3 = {
    id: 3,
    title: "Guitar basics 3",
    desc: "Its a basic exercise for beginners 3",
    author: "Oreki5",
    createdDate: "25/02/2004",
    status : "pending"
  };
  const a4 = {
    id: 4,
    title: "Guitar basics 4",
    desc: "Its a basic exercise for beginners 4",
    author: "Oreki5",
    createdDate: "25/02/2004",
    status : "submitted"
  };
  return (
    <>
      <div>Some assignment statistics goes here</div>
      <br />
      <div style={{ display: "flex" }}>
        <AssignmentTile assignment={a1} />
        <AssignmentTile assignment={a2} />
        <AssignmentTile assignment={a3} />
        <AssignmentTile assignment={a4} />
      </div>
    </>
  );
}
