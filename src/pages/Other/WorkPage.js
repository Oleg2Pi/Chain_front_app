import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchWorkPage } from "../../api";

import "../../styles/Other/Work/grid.css";
import "../../styles/Other/Work/main.css";

const WorkPage = () => {
  const [work, setWork] = useState(null); // начальное значение null
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getWork = async (id) => {
      try {
        const data = await fetchWorkPage(id);
        setWork(data); // устанавливаем данные
      } catch (error) {
        console.log("Ошибка при получении работы", error);
      }
    };

    if (id) {
      getWork(id); // загружаем данные при наличии id
    } else {
      console.log("Нет id работы");
    }
  }, [id]); // массив зависимостей

  // Проверяем состояние work
  if (!work) {
    return <p>Загрузка данных о работе...</p>; // отображаем сообщение о загрузке
  }

  const personImageUrl = `${
    process.env.PUBLIC_URL
  }/${work.personImagePath.replace(/\\/g, "/")}`;
  const workImageUrl = `${process.env.PUBLIC_URL}/${work.workFilePath.replace(
    /\\/g,
    "/"
  )}`;

  return (
    <main className="work-page-container">
      <div className="arrow-exit" onClick={handleGoBack}>
        <div className="arrow-back">&#x2039;</div>
      </div>
      <section>
        <div className="main-container">
          <div className="container">
            <div className="grey-container">
              <Link to={`/profile/${work.personChatId}`}>
                <img src={personImageUrl} alt="" className="image" />
                <div className="information">
                  <div className="name">{`${
                    work.personFirstName || "Нет имени"
                  } ${work.personLastName || "Нет фамилии"}`}</div>
                  <div className="extra-information">
                    <div className="direction">
                      {work.executorActivityArea ? (
                        <>{work.executorActivityArea} •</>
                      ) : (
                        "Нет направления • "
                      )}
                      {work.executorStatusCategory ? (
                        <span className="status">
                          {work.executorStatusCategory}
                        </span>
                      ) : (
                        <span className="status">Нет статуса</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              <div className="project-image-conteiner">
                <img src={workImageUrl} alt="" className="project-image" />
              </div>
            </div>
            <div className="project-information">
              <div className="project-name">
                {work.workName || "Название проекта"}
              </div>
              <div className="project-description">
                {work.workDescription || "Описание проекта"}
              </div>
            </div>
            <div className="indication-box">
              <div className="like-indicator">
                <i className="fa-regular fa-heart"></i>
                <div className="number">{work.likes || 0}</div>
              </div>
              <div className="eye-indicator">
                <i className="fa-solid fa-eye"></i>
                <div className="number">{work.views || 0}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4>Другие проекты автора</h4>
        <div className="grid">
          {work.otherWorks &&
            work.otherWorks.map((project, index) => {
              const imagePath = `${
                process.env.PUBLIC_URL
              }/${project.file.replace(/\\/g, "/")}`;
              return (
                <div key={index}>
                  <div className="grid-container">
                    <Link className="project-photo" to={`/profile/work/${project.id}`}>
                      <div className="project-photo">
                        <img src={imagePath} alt="" className="other-image" />
                      </div>
                    </Link>
                    <div className="indication">
                      <div className="indicator">
                        <i className="fa-regular fa-heart"></i>
                        <div className="numbers">{project.likes || 0}</div>
                      </div>
                      <div className="indicator">
                        <i className="fa-solid fa-eye"></i>
                        <div className="numbers">{project.views || 0}</div>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    <p>{project.description || "Описание проекта"}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
