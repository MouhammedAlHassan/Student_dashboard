//App.tsx

import { useState } from "react";

type Student = {
  name: string;
  level: number;
  score: number;
};

const students: Student[] = [
  { name: "Aiden Carter", level: 1, score: 88 },
  { name: "Bella Thompson", level: 2, score: 91 },
  { name: "Caleb Johnson", level: 3, score: 91 },
  { name: "Daisy Nguyen", level: 3, score: 93 },
  { name: "Ethan Wright", level: 1, score: 76 },
  { name: "Gavin Lopez", level: 3, score: 95 },
  { name: "Hannah Patel", level: 2, score: 95 },
  { name: "Isaac Chen", level: 2, score: 87 },
];

function App() {
  const [level, setLevel] = useState<number | "All">("All");

  const levels = Array.from(new Set(students.map(s => s.level))).sort();

  const filtered = level === "All"
    ? students
    : students.filter((s) => s.level === level);

  return (
      <div style={{ 
        fontFamily: "Segoe UI, sans-serif",
        background: "#f9fbfc",
        minHeight: "100vh",
        maxWidth: 800,
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50" }}>📘 Student Overview </h1>

        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <span style={{ marginRight: 10 }}>🎯 Select Level:</span>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value === "All" ? "All" : Number(e.target.value))}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              fontSize: 15,
              border: "1px solid #ccc"
            }}
          >
            <option value="All">All Level</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                Level {lvl}
              </option>
            ))}
          </select>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filtered.map((student, index) => (
            <li
              key={index}
              style={{
                marginBottom: 12,
                padding: 16,
                borderRadius: 8,
                backgroundColor: "#eef6fa",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap:"6px"
              }}
            >
              <span style={{ fontWeight: "bold", color: "#34495e" , flex:1 , textAlign:"left" }}>{student.name} </span>
              <span style={{flex:1 , textAlign:"center"}}>🎓 Level: {student.level}</span>
              <span style={{flex:1 , textAlign:"right"}}>📊 Average Score: {student.score}</span>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#999" }}>No students found.</p>
        )}
      </div>
  );
}

export default App;
