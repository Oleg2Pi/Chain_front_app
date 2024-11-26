import { useNavigate } from "react-router-dom";
import { loginUser } from "../session";
import { useEffect } from "react";

<script src="https://telegram.org/js/telegram-web-app.js"></script>

const Authorization = () => {
  const userData = window.Telegram.WebApp.initDataUnsage;

  const myId = userData.user.id;

  const navigate = useNavigate();

  useEffect(() => {
    const authorizeUser = async () => {
      const success = await loginUser(myId);

      if (success) {
        navigate("/");
      } else {
        console.log("Пользователь не зарегистрирован, id: ", myId);
        return <h1>Вы не зарегистрированы</h1>;
      }
    };

    authorizeUser();
  }, [myId, navigate]);

  return (
    <h1>Авторизация...</h1>
  );
};

export default Authorization;
