import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Video from "./Component/Video";
import Upload from "./Component/Upload";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
