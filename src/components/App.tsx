import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Box from "./Box";
import Counter from "./count";
import AutoIncrementCount from "./AutoIncrement";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./registerForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/">Home</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/register">Register</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/autoIncrement">Auto update Count</Link>
            </span>
          </li>

          <li className="nav-item">
            <span className="nav-link">
              <Link to="/counter">Counter</Link>
            </span>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/autoIncrement" element={<AutoIncrementCount />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
