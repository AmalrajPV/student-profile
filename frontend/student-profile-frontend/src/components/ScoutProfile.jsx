import { useParams } from "react-router-dom";
import { useFetch } from "../helpers/useFetch";
import Profile from "./Profile";

const ScoutProfile = (props) => {
    const params = useParams();
  const {data, loading, error} = useFetch(`/users/show/${params.id}`);

    return ( 
        <Profile data={data} scout={true}/>
     );
}
 
export default ScoutProfile;