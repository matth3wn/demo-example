import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SiteView from "./components/SiteView";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/site/:id" element={<SiteView />} />
      </Routes>
    </>
  );
}

export default App;
