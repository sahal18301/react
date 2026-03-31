import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <h2>Visa App</h2>
     
      <Link to="/">Home</Link> | <Link to="/form">Form</Link> | < Link to="/submit">Submit</Link> | 
      <Link to="/review">Review</Link>
    </nav>
  );
}

export { App };