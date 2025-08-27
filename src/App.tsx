import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Box from "./Box";
import Counter from "./count";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>

      <Outlet></Outlet>
    </>
  );
}

export default App;
