import { Link } from "react-router-dom";
import "../css/Home.css";
import { motion } from "framer-motion";
import image from "../photos/landing-img.webp";

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .7 }}
    >
      <div className="right">
        <img
          src={image}
          alt="Person Image"
          className="right-pic"
        />
      </div>

      <div className="left">
        <div className="big-title">
          <h1>
            <span className="orange">Future</span> is here,
          </h1>
          <h1>
            Built profile <span className="orange">now.</span>
          </h1>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          eius distinctio odit, magni magnam qui ex perferendis vitae!
        </p>
        <div className="cta">
          <Link to={"/profile"} className="landing-btn mp">
            Manage Profile
          </Link>
          <a href="#" className=" landing-btn dcv">
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
