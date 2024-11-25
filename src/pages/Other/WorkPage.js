import React from "react";

import '../../styles/Other/Work/grid.css';
import '../../styles/Other/Work/main.css';
import { Link } from "react-router-dom";

const WorkPage = () => {


    return (
        <main className>
    <Link className="arrow-exit" to="#">
      <div className="arrow-back">&#x2039;</div>
    </Link>
    <section>
      <div className="main-container">
        <div className="container">
          <div className="grey-container">
            <Link to="#">
              <img src="" alt="" className="image" />
              <div className="information">
                <div className="name">Имя и фамилия</div>
                <div className="extra-information">
                  <div className="direction">направление • <span className="status">Ищет работу</span></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="project-information">
            <div className="project-name">Название проекта</div>
            <div className="project-description">Описание проекта</div>
          </div>
          <div className="indication-box">
            <div className="like-indicator">
              <i className="fa-regular fa-heart"></i>
              <div className="number">97</div>
            </div>
            <div className="eye-indicator">
              <i className="fa-solid fa-eye"></i>
              <div className="number">350</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4>Другие проекты автора</h4>
      <div className="grid">
        <div>
          <div className="grid-container">
            <div className="indication">
              <div className="indicator">
                <i className="fa-regular fa-heart"></i>
                <div className="numbers">97</div>
              </div>
              <div className="indicator">
                <i className="fa-solid fa-eye"></i>
                <div className="numbers">350</div>
              </div>
            </div>
          </div>  
          <div className="description">
            <p>Съемка клипа местному музыканту</p>
          </div>
        </div>
        
        <div>
          <div className="grid-container">
            <div className="indication">
              <div className="indicator">
                <i className="fa-regular fa-heart"></i>
                <div className="numbers">97</div>
              </div>
              <div className="indicator">
                <i className="fa-solid fa-eye"></i>
                <div className="numbers">350</div>
              </div>
            </div>
          </div>  
          <div className="description">
            <p>Съемка клипа местному музыканту</p>
          </div>
        </div>
          
        <div>
          <div className="grid-container">
            <div className="indication">
              <div className="indicator">
                <i className="fa-regular fa-heart"></i>
                <div className="numbers">97</div>
              </div>
              <div className="indicator">
                <i className="fa-solid fa-eye"></i>
                <div className="numbers">350</div>
              </div>
            </div>
          </div>  
          <div className="description">
            <p>Съемка клипа местному музыканту</p>
          </div>
        </div>
        
        <div>
          <div className="grid-container">
            <div className="indication">
              <div className="indicator">
                <i className="fa-regular fa-heart"></i>
                <div className="numbers">97</div>
              </div>
              <div className="indicator">
                <i className="fa-solid fa-eye"></i>
                <div className="numbers">350</div>
              </div>
            </div>
          </div>  
          <div className="description">
            <p>Съемка клипа местному музыканту</p>
          </div>
        </div>
        
      </div>
    </section>
  </main>
    );
};

export default WorkPage;
