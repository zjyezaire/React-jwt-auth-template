import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignupForm from "./components/SignupForm.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
      </Routes>
    </>
  );
}

export default App;