function Greeting(props) {
    return <h1 style={{ backgroundColor: "blue", padding: "50px", textAlign: "center" }}>Hello, {props.name} {props.surname}!</h1>;
}

export default Greeting;