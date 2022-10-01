import { motion } from "framer-motion";
import { useFetch } from "../helpers/useFetch";


const EditProfile = () => {
  const {data, loading, error} = useFetch("/users/myprofile");
    return ( 
        <motion.div className="edit-form-container">
            <form>
                <div className="ef-group">
                    <label htmlFor="">Bio</label>
                    <textarea name="" id="" cols="30" rows="10" value={data.about}></textarea>
                </div>
            </form>
        </motion.div>
     );
}
 
export default EditProfile;