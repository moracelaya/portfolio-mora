import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import MareaProject from "./MareaProject";
import DreamsyncProject from "./DreamsyncProject";
import RootProject from "./RootProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/marea" element={<MareaProject />} />
        <Route path="/dreamsync" element={<DreamsyncProject />} />
        <Route path="/root" element={<RootProject />} />
      </Routes>
    </BrowserRouter>
  );
}