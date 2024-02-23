import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";

const Users: React.FC = () => {

    const user = useSelector((state: RootState) => state.user);

    console.log(user)

    return (
        <div>
            <div className="homepage-content">

                <h1> WELCOME User</h1>


            </div>
        </div>
    );
};

export default Users;