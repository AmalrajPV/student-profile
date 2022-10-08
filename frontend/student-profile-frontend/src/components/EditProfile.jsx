import { motion } from "framer-motion";
import { useFetch } from "../helpers/useFetch";
import "../css/Profile.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { EditUlBox } from "./EditBoxes";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditProfile = () => {
  const { data, loading, error } = useFetch("/users/myprofile");
  return (
    <motion.div className="edit-form-container">
      <div className="">
        <div className="right-box-inner">
          <div className="rbi-title">Bio</div>
          <div className="rbi-content bio">
            <textarea style={{"width": "100%" ,"resize":"none"}} className="input-field" name="" id="" cols="30" rows="5" value={data?.about}></textarea>
          </div>
        </div>

        <div className="prof-container">

        <EditUlBox
            title={"Skill"}
            items={data?.skills}
            icon={<FontAwesomeIcon className="orange" icon={faCogs} />}
          />

          <div className="right-box-inner">
            <div className="rbi-title">title</div>
            <div className="rbi-content">
              <ul>
                <li>hello</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
