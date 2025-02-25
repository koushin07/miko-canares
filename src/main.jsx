import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Experience } from "./Experience.jsx";
import Layout from "./Layout.jsx";
import { About } from "./About.jsx";
import Skills from "./Skills.jsx";
import Project from "./Project.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>


    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
