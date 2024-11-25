import React, { useState, useEffect } from 'react';
import HeaderSearchWorks from '../components/HeaderSearchWorks';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import defaultImage from '../assets/icons/default-image.jpg';

const HomePage = () => {
    const [persons, setPersons] = useState([]); 

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetchUsers();
                const data = response.data;
                if (Array.isArray(data)) {
                    setPersons(data); 
                } else {
                    console.error("Полученные данные не являются массивом:", data);
                }
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        getUsers();
    }, []);

    return (
        <div>
            <HeaderSearchWorks />
            <section>
                <div className="grid-box">
                    {Array.isArray(persons) && persons.length > 0 ? (
                        persons.map((profile, index) => {
                            const fullName = `${profile.firstName} ${profile.lastName}`;
                            const profileImagePath = profile.image && profile.image.filePath
                                ? `${process.env.PUBLIC_URL}/${profile.image.filePath.replace(/\\/g, '/')}`  
                                : defaultImage; // Путь к изображению по умолчанию

                            if (index % 3 === 2) { // Каждые 3 элемента создаем row-box
                                return (
                                    <div className="row-box" key={profile.chatId}>
                                        <div className="information-box">
                                            <Link to="#">
                                                <div className="profile-info">
                                                    <img className="image" src={profileImagePath} alt={fullName} />
                                                    <div>{fullName}</div>
                                                </div>
                                            </Link>
                                            <div class="indication-box">
                                                <div class="box">
                                                    <i class="fa-regular fa-heart"></i>
                                                    <div class="likes">0</div>
                                                </div>
                                                <div class="box">
                                                    <i class="fa-solid fa-eye"></i>
                                                    <div class="viewers">0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="column-box" key={profile.chatId}>
                                        <div className="information-box">
                                            <Link to="#">
                                                <div className="profile-info">
                                                    <img className="image" src={profileImagePath} alt={fullName} />
                                                    <div>{fullName}</div>
                                                </div>
                                            </Link>
                                            <div class="indication-box">
                                                <div class="box">
                                                    <i class="fa-regular fa-heart"></i>
                                                    <div class="likes">0</div>
                                                </div>
                                                <div class="box">
                                                    <i class="fa-solid fa-eye"></i>
                                                    <div class="viewers">0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    ) : (
                        <p>Загрузка пользователей...</p> // Показываем сообщение во время загрузки
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;