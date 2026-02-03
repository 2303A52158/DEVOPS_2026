import React from "react";

function StudentCard({ name, rollNo, marks }) {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Student Details</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Roll Number:</strong> {rollNo}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </div>
  );
}

export default StudentCard;
