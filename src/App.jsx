import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./Components/BottomNav";
import Home from "./Components/Home";
import Lessons from "./Components/Lessons";
import Assessment from "./Components/Assessment";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";

const App = () => {
  return (
    <Router>
      <div className="pb-16">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
};

export default App;
