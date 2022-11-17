import { Route, Routes } from "react-router-dom";
import Complaint from "./pages/Complaint";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Complaint />} />
      </Routes>
    </>
  );
}

export default App;
