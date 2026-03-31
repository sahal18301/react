import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FormPage() {
    const [formData, setFormData] = useState({
        name: "",
        passport: "",
        country: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        localStorage.setItem("visaform", JSON.stringify(formData));
        navigate("/review");
    };

    return (
        <div>
            <h1>Visa Application Form</h1>
        
            <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
            />
            <br />

            <input
                name="passport"
                placeholder="Passport Number"
                onChange={handleChange}
            />
            <br />

            <input
                name="country"
                placeholder="Destination Country"
                onChange={handleChange}
            
            />
            <br />
        <button onClick={handleNext}>Next</button>
        </div>
    );
}