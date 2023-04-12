import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
