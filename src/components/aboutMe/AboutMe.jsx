import React from "react";
import { AboutMeSection, AboutInfo } from "./AboutMe.styled";
import person3 from "../../assets/img/image 6.png";

const AboutMe = () => {
  return (
    <AboutMeSection>
      <h2>Обо мне: цифры и факты</h2>
      <AboutInfo>
        <p>
          Мне 55 лет
          <br /> Инженер по образованию <br />
          Опыт в торговле — 27 лет
          <br />
          Средний ежемесячный профит за последний год: 23 400 долларов США
          <br />
          Моя собственность: автомобили Bentley и Lexus, квартира 167 м2 в
          центре Москвы, загородный дом <br /> Общее состояние: более 4,2 млн
          долларов.
          <br /> Я осуществил свои мечты. Теперь у меня достаточно свободного
          времени, чтобы помочь в этом вам
          <br />
          Всегда ваш, Андрей Мовчан
        </p>
        <img src={person3} alt="" />
      </AboutInfo>
    </AboutMeSection>
  );
};

export default AboutMe;
