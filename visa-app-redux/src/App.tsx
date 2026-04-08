import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import VisaFormPage from "./VisaFormPage.tsx";
import ReviewPage from "./ReviewPage.tsx";
import SuccessPage from "./SuccessPage.tsx";
import PassportFormPage from "./PassportFormPage.tsx";
import UserList from "./UserList.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<VisaFormPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/form_passport" element={<PassportFormPage />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
