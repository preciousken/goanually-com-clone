import Home from "./components/Home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './index.css'
import GetQuote from "./components/Get-Quote/GetQuote";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";

function App() { 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
