import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sweets from "./components/sweets/Sweets";
import Advice from "./components/advice/Advice";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="page-frame">
        <Header />
        <Sweets />
        <Advice />
        <Footer />
      </main>
    </>
  );
}

export default App;
