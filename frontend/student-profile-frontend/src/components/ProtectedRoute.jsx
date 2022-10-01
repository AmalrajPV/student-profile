import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = (props) => {
    // let auth = {'token':true}
    
    return (
      props.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute;