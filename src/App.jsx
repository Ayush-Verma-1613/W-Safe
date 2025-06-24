import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";

// Pages
import Home from "./Components/Home";
import Community from "./Components/Community";
import Laws from "./Components/Laws";
import Contact from "./Components/Contact";
import Explore from "./Components/Explore";
import LocationPage from "./Components/LocationPage";
import SosButton from "./Components/SosButton";
import Join from "./Components/Join";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Protected layout and routes */}
        {/* <Route element={<ProtectedRoute />}> */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/join" element={<Join />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/sos" element={<SosButton />} />
            {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  */}
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
