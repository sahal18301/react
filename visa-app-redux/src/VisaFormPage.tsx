import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVisa } from "./features/visa/visaSlice"; // import your action

export default function VisaFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fullName: "",
    passport: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // ✅ Save form data to Redux before navigating
    dispatch(setVisa(form));
    navigate("/review");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">
          Visa Application Form
        </h2>

        <div className="flex flex-col gap-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            name="passport"
            placeholder="Passport Number"
            value={form.passport}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-purple-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
