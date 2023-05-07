import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Statistics from "./screens/Statistics";
import Achievements from "./screens/Achievements"
import BackCare from "./screens/BackCare";
import EyeCare from "./screens/EyeCare";
import EarCare from "./screens/EarCare";
import Exercise from "./screens/Exercise";
import TrainBackCare from "./screens/TrainBackCare";
import AboutUs from "./screens/Aboutus";
import HowtoUse from "./screens/HowtoUse";
import Water from "./screens/Water";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/backcare" element={<BackCare />} />
        <Route path="/earcare" element={<EarCare />} />
        <Route path="/eyecare" element={<EyeCare />} />
        <Route path="/hydration" element={<Water />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/teachbackcare" element={<TrainBackCare />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtouse" element={<HowtoUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
