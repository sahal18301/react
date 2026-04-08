import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const visa = useSelector(
    (state: RootState) => state.visa as {
      fullName: string;
      passport: string;
      country: string;
    }
  );
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">
          Review Your Application
        </h2>

        <div className="flex flex-col gap-4 text-gray-700 text-left">
          <p>
            <span className="font-semibold">Full Name:</span> {visa.fullName}
          </p>
          <p>
            <span className="font-semibold">Passport Number:</span>{" "}
            {visa.passport}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {visa.country}
          </p>
        </div>

        <button
          onClick={() => navigate("/success")}
          className="mt-6 w-full bg-purple-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
