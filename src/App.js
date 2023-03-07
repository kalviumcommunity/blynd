import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NamePage from "./pages/NamePage/NamePage";
import GenderPage from "./pages/GenderPage/GenderPage";
import Interest from "./pages/InterestPage/Interest";
import UploadPicture from "./pages/UploadPictures/UploadPicture";
import SuccessModal from "./components/SuccessModal/SuccessModal";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/uploadpictures" element={<UploadPicture />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
