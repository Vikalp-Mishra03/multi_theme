import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Video from "./Component/Video";
import Upload from "./Component/Upload";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
