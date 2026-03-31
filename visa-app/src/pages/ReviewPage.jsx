import { useNavigate } from "react-router-dom";
export default
    function ReviewPage() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("visaform")) || {};

    return (
        <div>
            <h1>Review Your Application</h1>
            <p>
                <strong>Name:</strong> {data.name}
            </p>
            <p>
                <strong>Passport Number:</strong> {data.passport}
            </p>
            <p>
                <strong>Destination Country:</strong> {data.country}
            </p>
            <button onClick={() => navigate("/submit")}>Submit Application</button>
        </div>
    );
}