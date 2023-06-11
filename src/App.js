import classes from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Education from "./pages/Education";

function App() {
  return (
    <div className="App">
      <div className={classes.banner}>
        <span>Tom Von Dollen</span>
      </div>
      <div className={classes.margin}></div>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
