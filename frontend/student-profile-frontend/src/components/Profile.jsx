import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faBriefcase,
  faCogs,
  faIndustry,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Profile.css";
import { UlBox, RegularBox, ProfileBox } from "./Boxes";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="prof-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .7 }}
    >
      <div className="left-box">
        <ProfileBox
          username={"amalraj"}
          email={"amalraj@gmail.com"}
          logged={true}
        />
        <div className="box">
          <div className="socials">
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
      <div className="right-box">
        <RegularBox
          icon={<FontAwesomeIcon className="orange" icon={faAddressCard} />}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sit architecto maxime distinctio commodi temporibus, animi nemo? Labore aut aliquam consectetur saepe a sunt. Velit commodi eius eligendi minima incidunt."
          }
          title={"Bio"}
        />

        <div className="prof-container">
          <UlBox
            title={"Education"}
            items={["lorem", "ipsum", "dolor", "amet"]}
            icon={<FontAwesomeIcon className="orange" icon={faGraduationCap} />}
          />
          <UlBox
            title={"Experience"}
            items={["lorem", "ipsum", "dolor", "amet"]}
            icon={<FontAwesomeIcon className="orange" icon={faBriefcase} />}
          />
        </div>

        <div className="prof-container">
          <UlBox
            title={"Skills"}
            items={["lorem", "ipsum", "dolor", "amet"]}
            icon={<FontAwesomeIcon className="orange" icon={faCogs} />}
          />
          <UlBox
            title={"Projects"}
            items={["lorem", "ipsum", "dolor", "amet"]}
            icon={<FontAwesomeIcon className="orange" icon={faIndustry} />}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
