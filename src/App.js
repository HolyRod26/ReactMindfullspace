import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostsLibrary from "./components/PostsLibrary";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsLibrary />} />
      </Routes>
    </Box>
  );
}

export default App;
