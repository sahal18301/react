import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 text-gray-800 font-sans">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">
        Visa Application
      </h1>

      {/* Subtitle */}
      <p className="text-lg opacity-90 mb-10">
        Fast & easy online application process
      </p>

      {/* Start Button */}
      <Link
        to="/form"
        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
      >
        Start Application
          </Link>
          <br />
      <Link
        to="/form_passport"
        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
      >
        Start Application for your Passport
      </Link>

      {/* Footer */}
      <p className="mt-12 text-sm opacity-70">
        © 2026 Visa App. All rights reserved.
      </p>
    </div>
  );
}
