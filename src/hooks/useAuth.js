// import { useSelector } from "react-redux";
// import useFirebase from "./useFirebase";
import { useUser } from "./user";

const useAuth = () => {
    // const auth = useSelector(state => state.auth)
    // return auth
    const auth = useUser();
    return auth;
}

export default useAuth;