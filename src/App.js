import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dasboard from "./pages/Dasboard";
import Auth from "./components/Auth";


function App() {
  return (
    <div className="App bg-primary">
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/" element={<Auth><Dasboard/></Auth>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
