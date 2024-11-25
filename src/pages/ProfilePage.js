import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserByChatId } from "../api";

const ProfilePage = () => {
    const { chatId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetchUserByChatId(chatId);
            setUser(response.data);
        };
        getUser();
    }, [chatId]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.firstName}</h2>
            <p>Phone: {user.phone}</p>
            <Link to={`/edit-profile/${user.chatId}`}>Edit profile</Link>
        </div>
    );
};

export default ProfilePage;
