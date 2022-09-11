import { Route, Routes } from "react-router-dom";
import Headers from "./Headers";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import "../css/App.css";
import Users from "./Users";
import { AnimatePresence } from "framer-motion";
import Contact from "./Contact";


const App = () => {
  return (
    <>
      <Headers></Headers>
      <main className="main-container">
      <div className="showcase-area">

      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </AnimatePresence>

      </div>
      </main>
    </>
  );
};

export default App;
