import { Route, Routes } from "react-router-dom";
import Headers from "./Headers";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import "../css/App.css";
import Users from "./Users";
import { AnimatePresence } from "framer-motion";
import Contact from "./Contact";
import Myprofile from "./Myprofile";
import ScoutProfile from "./ScoutProfile";
import EditProfile from "./EditProfile";
import PrivateRoute from "./ProtectedRoute";


const App = () => {
  return (
    <>
      <Headers></Headers>
      <main className="main-container">
      <div className="showcase-area">

      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="/users/:id" element={<ScoutProfile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute token={false} />}>
          <Route path="profile" element={<Myprofile />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </AnimatePresence>

      </div>
      </main>
    </>
  );
};

export default App;
