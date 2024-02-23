import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";
import { TextField } from "@mui/material";
import TextInput from "../components/textfield";
import ButtonComponent from "../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { login } from "../../redux/userSlice";

const HomePage: React.FC = () => {
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    const user = useSelector((state: RootState) => state.user);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    console.log(user)

    return (
        <div>
            <Nav />
            <div className="homepage-content">

                <h1> WELCOME {user.email} {user.password}</h1>
                {/* <TextInput
                    value={email}
                    onchange={(val: string) => { setEmail(val) }}
                    placeholder="Email"
                    type="email"
                    required={true}
                />
                <TextInput
                    value={password}
                    onchange={(val: string) => setPassword(val)}
                    placeholder="Password"
                    type="password"
                    required={true}
                />

                <ButtonComponent
                    size="large"
                    variant="contained"
                    label="Login"
                    onclick={handleLogin}
                /> */}
                {/* {user.error && <span className="error">Something went wrong!</span>}
      {user.pending === false && (
        <span className="success">Account has been updated!</span> */}


            </div>
        </div>
    );
};

export default HomePage;