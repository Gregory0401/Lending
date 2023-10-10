import React from "react";
import {
  HeaderSection,
  LogoWrap,
  Person,
  Cyrcle,
  PersonIcon,
  Text,
  Baner,
  Info,
  Span1,
  Span2,
} from "./Header.styled";
import telpers from "../../assets/img/tel.png";

const Header = () => {
  return (
    <HeaderSection>
      <LogoWrap>
        <Person>
          <PersonIcon src={telpers} alt="person" />
        </Person>
        <Cyrcle>
          <Text>
            <b>Андрей Мовчан</b>
            <p>
              Представляет <br /> обучающий курс:
            </p>
          </Text>
        </Cyrcle>
      </LogoWrap>
      <Baner>
        <div>
          <Info>
            <Span1>АНДРЕЙ МОВЧАН</Span1>
            <Span2>
              ТРЕЙДЕР <br /> ЧАСТНЫЙ ИНВЕСТОР <br /> ФИНАНСОВЫЙ КОНСУЛЬТАНТ
            </Span2>
          </Info>
          <b>Торговля на бирже:</b>
          <p>от первых результатов к большому капиталу</p>
        </div>
        <button>Получить курс</button>
      </Baner>
    </HeaderSection>
  );
};

export default Header;
