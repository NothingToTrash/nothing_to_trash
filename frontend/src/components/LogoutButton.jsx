import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";
import "./logoutbutton.scss";


const LogoutButton = ({ setToken, setShowSidebarUserProfil }) => {

    const navigate = useNavigate();

    const logout = () => {
        fetch(apiBaseUrl + "users/logout",
            { credentials: "include" })
            .then((res) => {
                console.log(res)
                setToken(null);
                setShowSidebarUserProfil(false);
                navigate("/");
            });
    };

    return (<div>

        <div><button className="logoutbutton" onClick={logout}>Logout</button></div>

    </div>);
}

export default LogoutButton;