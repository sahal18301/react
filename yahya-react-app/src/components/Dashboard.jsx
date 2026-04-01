import { useState } from "react";

function Dashboard() {
  const [role, setRole] = useState("user"); // "admin" or "user"

  return (
    <div>
      <h1>{role === "admin" ? "Admin Panel " : "User Dashboard 👤"}</h1>

      <button onClick={() => setRole("admin")}>Admin</button>

      <button onClick={() => setRole("user")}>User</button>
    </div>
  );
}

export default Dashboard ;
