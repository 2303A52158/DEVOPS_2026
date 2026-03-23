import React, { useState } from "react";
import "./App.css";

const students = [
  { id: 1, name: "Alice Johnson", grade: "A", subject: "Mathematics", score: 95 },
  { id: 2, name: "Bob Smith",    grade: "B", subject: "Science",     score: 82 },
  { id: 3, name: "Clara Diaz",   grade: "A", subject: "History",     score: 91 },
  { id: 4, name: "David Lee",    grade: "C", subject: "English",     score: 74 },
  { id: 5, name: "Eva Chen",     grade: "A", subject: "Physics",     score: 97 },
];

function App() {
  const [search, setSearch] = useState("");
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Student Dashboard</h1>
        <p>Containerized React App — v1.0-frontend</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <h3>{students.length}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>{students.filter((s) => s.grade === "A").length}</h3>
          <p>A Grade</p>
        </div>
        <div className="stat-card">
          <h3>{Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)}%</h3>
          <p>Avg Score</p>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.subject}</td>
              <td>{s.score}%</td>
              <td>
                <span className={`badge grade-${s.grade.toLowerCase()}`}>
                  {s.grade}
                </span>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "#888" }}>
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <footer className="footer">
        <p>Deployed via Continuous Deployment — PaaS Container Pipeline</p>
      </footer>
    </div>
  );
}

export default App;
