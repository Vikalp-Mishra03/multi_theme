import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Component/Header";
import Home from "./Component/Home";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
