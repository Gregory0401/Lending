import React from "react";
import {
  ReasonSection,
  WorldMap,
  InfoWrap,
  Container,
  PersonWrap,
  ReasonListWrap,
  ReasonList,
  ReasonItem,
  ButtonWrap,
} from "./Reason.styled";
import person from "../../assets/img/image 20.png";
import wordMapa from "../../assets/img/world-map.png";

const Reason = () => {
  return (
    <ReasonSection>
      <WorldMap src={wordMapa} alt="" />
      <Container>
        <h2>Этот курс подойдет вам, если:</h2>
        <InfoWrap>
          <PersonWrap>
            <img src={person} alt="" />
          </PersonWrap>
          <ReasonListWrap>
            <ReasonList>
              <ReasonItem>
                <h4>1</h4> <p>Вы хотите вкладывать свои средства c умом</p>
              </ReasonItem>
              <ReasonItem>
                <h4>2</h4>
                <p>Вы устали жить лишь на одну зарплату</p>
              </ReasonItem>
              <ReasonItem>
                <h4>3</h4>
                <p>Хотите независимости и свободы</p>
              </ReasonItem>
              <ReasonItem>
                <h4>4</h4>
                <p>Устали терять деньги c мошенниками</p>
              </ReasonItem>
              <ReasonItem>
                <h4>5</h4> <p>Хотите воплощения в жизнь своих желаний</p>
              </ReasonItem>
            </ReasonList>
          </ReasonListWrap>
        </InfoWrap>
      </Container>
      <ButtonWrap>
        <button>Подать заявку</button>
      </ButtonWrap>
    </ReasonSection>
  );
};

export default Reason;
