import { useRef } from "react";

function Uncontrolled() {
  const inputRef = useRef();

  function handleClick() {
    alert("HELLO " + inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={handleClick}>SUBMIT</button>
    </div>
  );
}

export default Uncontrolled;
