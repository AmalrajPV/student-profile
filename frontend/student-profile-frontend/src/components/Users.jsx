import { ProfileBox } from "./Boxes";
import "../css/Users.css";
import { motion } from "framer-motion";
import { useFetch } from "../helpers/useFetch";

const Users = () => {
  const {data, loading, error} = useFetch("/users/show");

  return (
    <motion.div
      className="user-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .7 }}
    >
      {data?.map((item, index)=>
      <ProfileBox key={index} username={item.user?.username} email={item.user?.email} viewlink={`/users/${item.user?._id}`} />
      )}
    </motion.div>
  );
};

export default Users;
