import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogArchive />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App; 