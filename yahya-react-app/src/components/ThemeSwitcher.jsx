import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "50vh",
      }}
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
