import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// import { useEffect, useState } from "react";
// import axios from "axios";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NamePage from "./pages/NamePage/NamePage";
import GenderPage from "./pages/GenderPage/GenderPage";
import Interest from "./pages/InterestPage/Interest";
import UploadPicture from "./pages/UploadPictures/UploadPicture";
import Dashboard from "./pages/Dashboard/Dashboard";
import MoreInfoPage from "./pages/MoreInfoPage/MoreInfoPage";
import SelectInterest from "./pages/SelectInterest/SelectInterest";
import Settings from "./pages/Settings/Settings";
import DateProfile from "./pages/DateProfile/DateProfile";
import ContactFaqs from "./pages/ContactFaqs/ContactFaqs";
import { MyContextProvider } from "./context/MyContextProvider";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useAuthContext();

  // const [user, setUser] = useState(null);

	// const getUser = async () => {
	// 	try {
	// 		const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
	// 		const { data } = await axios.get(url, { withCredentials: true });
	// 		setUser(data.user._json);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);

  return (
    <BrowserRouter>
      <MyContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard/matches" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/dashboard/matches" />}
          />
          <Route
            path="/name"
            // element={
            //   !user ? <NamePage /> : <Navigate to="/dashboard/matches" />
            // }
             element={<NamePage />}
          />
          <Route
            path="/gender"
            // element={
            //   !user ? <GenderPage /> : <Navigate to="/dashboard/matches" />
            // }
            element={<GenderPage />}
          />
          <Route
            path="/interest"
            // element={
            //   !user ? <Interest /> : <Navigate to="/dashboard/matches" />
            // }
            element={<Interest />}
          />
          <Route
            path="/more-info"
            // element={
            //   !user ? <MoreInfoPage /> : <Navigate to="/dashboard/matches" />
            // }
            element={<MoreInfoPage />}
          />
          <Route
            path="/select-interest"
            // element={
            //   !user ? <SelectInterest /> : <Navigate to="/dashboard/matches" />
            // }
            element={<SelectInterest />}
          />
          <Route
            path="/upload-pictures"
            // element={
            //   !user ? <UploadPicture /> : <Navigate to="/dashboard/matches" />
            // }
            element={<UploadPicture />}
          />
          <Route
            path="/dashboard/matches"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/editprofile"
            element={user ? <DateProfile /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/settings"
            element={user ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/contactfaqs"
            element={user ? <ContactFaqs /> : <Navigate to="/login" />}
          />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
