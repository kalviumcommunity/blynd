import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const useLogout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const logout = () => {
    //remove user from storage
    console.log(cookies.UserId);
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    removeCookie("user", cookies.user);


    navigate("/");
    window.location.reload();
  };

  return { logout };
};
