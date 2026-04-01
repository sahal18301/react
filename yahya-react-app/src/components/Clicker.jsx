function Clicker() {
  function handleClick() {
    alert("You've clicked the button!");
  }

  return <button onClick={handleClick} style={{backgroundColor:'black', color:'white', marginTop: '10px'}}>Click me</button>;
}

export default Clicker;
//COMMENT: This component defines a button that, when clicked, will display an alert message. The handleClick function is called when the button is clicked, and it uses the alert function to show a message to the user. The button is styled with a black background and white text, and it has a margin at the top for spacing.