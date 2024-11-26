import { fetchProfile } from "./api";

export const loginUser = async (myId) => {
    const response = await fetchProfile(myId);

    if (!response) {
        console.error("Такого пользователя нет");
        return false; 
    }

    sessionStorage.setItem('myId', myId);
    return true;
}

export const getMyId = () => {
    try {
        return sessionStorage.getItem('myId');
    } catch (error) {
        console.log("Не зарегистрирован пользователь: ", error);
    }
}
