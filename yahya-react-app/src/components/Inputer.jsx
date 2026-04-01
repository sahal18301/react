import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />

      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputer;
