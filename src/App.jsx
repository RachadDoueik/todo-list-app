import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Route: Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        {/*<Route path="/about" element={<About />} />*/}

        {/* Catch-All: 404 Page */}
        {/*Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}

export default App;