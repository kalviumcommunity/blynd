
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupLogin from './pages/SignupLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<SignupLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
