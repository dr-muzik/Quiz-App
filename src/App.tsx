import "./App.css";
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameInt from "./interface/GameInt";
import SubmitInt from "./interface/SubmitInt";
import MainLayout from "./layouts/MainLayout";
import Details from "./components/Details";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Welcome from "./components/dashboardComponent/Welcome";
import Quiz from "./components/dashboardComponent/Quiz";
import Report from "./components/dashboardComponent/Report";
import Profile from "./components/dashboardComponent/Profile";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import { IQuestion } from "./Questiongenerator";

export interface ICollation {
  id: number;
  question: string;
  Answer: string;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="dashboard/:page" element={<Dashboard />}>
            <Route index element={<Welcome />} />
            <Route path="Quiz" element={<Quiz />} />
            <Route path="Report" element={<Report />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
          <Route path="gameInt/:quizId" element={<GameInt />} />
          <Route path="submit" element={<SubmitInt />} />
          <Route path="submit/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
