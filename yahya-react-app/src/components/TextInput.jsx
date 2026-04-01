import { useState } from "react";

function TextInput() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Enter your name 👇</h1>

      <input type="text" value={name} onChange={handleChange} />

      <p>Your name is: {name}</p>
    </div>
  );
}

export default TextInput;
