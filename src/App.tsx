import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Box from "./Box";
import Counter from "./count";
import AutoIncrementCount from "./AutoIncrement";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="d-flex">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/autoIncrement">Auto update Count</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/autoIncrement" element={<AutoIncrementCount />} />
        </Routes>
      </BrowserRouter>

      <Outlet></Outlet>
    </>
  );
}

export default App;
