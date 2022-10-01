import { useFetch } from "../helpers/useFetch";
import Profile from "./Profile";

const Myprofile = () => {
  const {data, loading, error} = useFetch("/users/myprofile");
    return ( 
        <Profile logged={true} data={data}/>
     );
}
 
export default Myprofile;