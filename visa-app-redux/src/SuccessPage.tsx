import { useDispatch } from "react-redux";
import { resetVisa } from "./features/visa/visaSlice";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewApplication = () => {
    dispatch(resetVisa()); // clears the Redux store
    navigate("/"); // redirect to home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 text-gray-800 font-sans p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">
          Application Submitted ✅
        </h2>
        <p className="mb-6 text-gray-700">
          Your visa application has been successfully submitted.
        </p>

        <button
          onClick={handleNewApplication}
          className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          New Application
        </button>
      </div>

      <p className="mt-6 text-sm opacity-70 text-center">
        © 2026 Visa App. All rights reserved.
      </p>
    </div>
  );
}