import { ProfileBox } from "./Boxes";
import "../css/Users.css";
import { motion } from "framer-motion";

const Users = () => {
  return (
    <motion.div
      className="user-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .7 }}
    >
      <ProfileBox username={"amalraj"} email={"amalraj@gmail.com"} />
      <ProfileBox username={"amalraj"} email={"amalraj@gmail.com"} />
      <ProfileBox username={"amalraj"} email={"amalraj@gmail.com"} />
      <ProfileBox username={"amalraj"} email={"amalraj@gmail.com"} />
      <ProfileBox username={"amalraj"} email={"amalraj@gmail.com"} />
    </motion.div>
  );
};

export default Users;
