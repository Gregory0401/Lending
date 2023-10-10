import React from "react";
import {
  DreamSection,
  OpacityWrap,
  DreamList,
  Container,
  GridContainerList,
  GridContainerItem,
  DreamStepList,
  Arrow,
  StepsList,
  StepItem,
  Arrow2,
  StepsList2,
  StepItem2,
  ColumnWrap,
} from "./Dream.styled";
import opacity from "../../assets/img/Rectangle 67.png";
import svg1 from "../../assets/svg/icon_profit.svg";
import svg2 from "../../assets/svg/icon_flat.svg";
import svg3 from "../../assets/svg/icon_car.svg";
import svg4 from "../../assets/svg/icon_travelling.svg";
import arrow from "../../assets/svg/Arrow 5.svg";
import arrow2 from "../../assets/svg/Arrow 4.svg";

const Dream = () => {
  return (
    <DreamSection>
      <OpacityWrap>
        <img src={opacity} alt="" />
      </OpacityWrap>
      <Container>
        <DreamList>
          <div>
            <h2>У вас есть мечта?</h2>
          </div>
          <GridContainerList>
            <GridContainerItem>
              <img src={svg1} alt="" />
              <p>
                Сбережения растут <br /> без вашего участия
              </p>
            </GridContainerItem>
            <GridContainerItem>
              <img src={svg2} alt="" />
              <p>
                Собственная квартира <br /> без ипотеки
              </p>
            </GridContainerItem>
            <GridContainerItem>
              <img src={svg3} alt="" />
              <p>Новый автомобиль</p>
            </GridContainerItem>
            <GridContainerItem>
              <img src={svg4} alt="" />
              <p>
                Путешествия <br /> несколько раз в год
              </p>
            </GridContainerItem>
          </GridContainerList>
        </DreamList>
        <Arrow>
          <img src={arrow} alt="" />
        </Arrow>
        <DreamStepList>
          <h2>Сделайте ваши мечты реальностью прямо сейчас!</h2>
          <p>Путь к их осуществлению состоит всего из четырех шагов:</p>
          <ColumnWrap>
            <StepsList>
              <StepItem>Сегодня</StepItem>
              <Arrow2 src={arrow2} alt="" />
              <StepItem>Завтра</StepItem>
              <Arrow2 src={arrow2} alt="" />
              <StepItem>После завтра </StepItem>
              <Arrow2 src={arrow2} alt="" />
              <StepItem>Навсегда</StepItem>
            </StepsList>
            <StepsList2>
              <StepItem2>Получите бесплатно консультацию менеджера</StepItem2>
              <StepItem2>Ознакомьтесь c программой курса</StepItem2>
              <StepItem2>
                Примените свои знания при нашем сопровождении
              </StepItem2>
              <StepItem2>Получите то, o чем мечтали</StepItem2>
            </StepsList2>
          </ColumnWrap>
        </DreamStepList>
      </Container>
    </DreamSection>
  );
};

export default Dream;
