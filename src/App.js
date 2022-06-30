import React from "react";

import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import "./App.css";
import Summer from "./components/Summer";
import Page from "./components/Page";
import About_text from "./components/About_text";
import Team from "./components/Team";
import Events from "./components/Events";
import Join from "./components/Join";

// import UploadProfile from './components/pages/UploadProfile';
// import HowToUse from './components/pages/HowToUsePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Page />} />
          <Route path="/summerbootcamp" element={<Summer />} />
          <Route path="/about" element={<About_text />} />
          <Route path="/team" element={<Team />} />
          <Route path="#events" element={<Page />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
