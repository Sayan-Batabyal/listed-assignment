import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dasboard from "./pages/Dasboard";


function App() {
  return (
    <div className="App bg-primary">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/dash" element={<Dasboard/>} />
      </Routes>
    </div>
  );
}

export default App;
