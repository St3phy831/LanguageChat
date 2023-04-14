import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import DetailView from "./pages/DetailView";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/:id" element={<DetailView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
