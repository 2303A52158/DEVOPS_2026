import React from "react";
import StudentCard from "./StudentCard";

function App() {
  // Student details stored in parent (ARRAY)
  const students = [
    {
      name: "A.Sathwik",
      rollNo: "21CS012",
      marks: 86,
    },
    {
      name: "A.shiva",
      rollNo: "21CS045",
      marks: 80,
    },
    {
      name: "M.Harish",
      rollNo: "21CS125",
      marks: 89,
    },
    {
      name: "G.Sandeep",
      rollNo: "21CS621",
      marks: 100,
    },
    {
      name: "B.Bhargav",
      rollNo: "21CS032",
      marks: 77,
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Marks Card</h1>

      {/* Loop through array and display each student */}
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          rollNo={student.rollNo}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;
