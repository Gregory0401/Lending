import React from "react";
import {
  GreySect,
  MessageWrap2,
  TextWrap,
  MessageWrap,
  PersImg,
  MessageWrapSecond,
  MessageWrapSecond2,
  TextWrap2,
  PersImg2,
  GreyContainer,
  ChatWrap,
  BottomText,
} from "./GreySection.styled";
import pers1 from "../../assets/img/p1.png";
import pers2 from "../../assets/img/p2.png";
import pers3 from "../../assets/img/p3.png";
import pers5 from "../../assets/img/p4.png";
import mesage from "../../assets/img/chat.png";
import mesage2 from "../../assets/img/chat2.png";

const GreySection = () => {
  return (
    <GreySect>
      <GreyContainer>
        <h2>
          Мнения первых <br />
          участников o курсе
        </h2>
        <ChatWrap>
          <MessageWrap>
            <PersImg src={pers1} alt="" />
            <MessageWrap2>
              <img src={mesage2} alt="" />
              <TextWrap>
                Давид, 31 год Наконец закончил весь цикл уроков и вчера вывел
                первые деньги. Стратегия «Трииндейца» просто космос! Спасибо,
                Алексей, за такой подробный материал, a главное —простой.***
              </TextWrap>
            </MessageWrap2>
          </MessageWrap>

          <MessageWrapSecond>
            <MessageWrapSecond2>
              <img src={mesage} alt="" />
              <TextWrap2>
                Андрей Мовчан Давид, всегда рад помочь! Надеюсь, цифры на вашем
                счете вас полностью устроили. Эта стратегия была создана группой
                авторитетных аналитиков, поэтому ee надежность давно доказана.
                Буду рад вам помочь, если появятся вопросы!
              </TextWrap2>
            </MessageWrapSecond2>
            <PersImg2 src={pers2} alt="" />
          </MessageWrapSecond>

          <MessageWrap>
            <PersImg src={pers3} alt="" />
            <MessageWrap2>
              <img src={mesage2} alt="" />
              <TextWrap>
                Аснат, 27 лет Доброго времени суток! Ваша история успеха меня
                очень вдохновила. Торгую уже две недели по вашим стратегиям — ни
                одного ошибочного решения. Зато каждый день наблюдаю, как растут
                цифры на счете. Спасибо!***
              </TextWrap>
            </MessageWrap2>
          </MessageWrap>

          <MessageWrapSecond>
            <MessageWrapSecond2>
              <img src={mesage} alt="" />
              <TextWrap2>
                Андрей Мовчан Давид, всегда рад помочь! Надеюсь, цифры на вашем
                счете вас полностью устроили. Эта стратегия была создана группой
                авторитетных аналитиков, поэтому ee надежность давно доказана.
                Буду рад вам помочь, если появятся вопросы!
              </TextWrap2>
            </MessageWrapSecond2>
            <PersImg2 src={pers2} alt="" />
          </MessageWrapSecond>

          <MessageWrap>
            <PersImg src={pers5} alt="" />
            <MessageWrap2>
              <img src={mesage2} alt="" />
              <TextWrap>
                Шапиро Эстэр, 29 лет Стратегия «Соковыжималка», наверное, лучшая
                из ваших! Не думала, что позволю себе уйти с работы, но уже
                готова к этому. Профита от торговли явно хватит на всю семью, и
                смогу даже откладывать. Спасибо, Алексей.***
              </TextWrap>
            </MessageWrap2>
          </MessageWrap>

          <MessageWrapSecond>
            <MessageWrapSecond2>
              <img src={mesage} alt="" />
              <TextWrap2>
                Андрей Мовчан Ирина, приятно слышать такие слова! У каждой из
                стратегий есть свои ярые поклонники, но «Соковыжималка», по моим
                наблюдениям, входит в топ-5. А вот копить я бы не рекомендовал —
                лучше инвестируйте. Обращайтесь, подскажу, как лучше это сделать
              </TextWrap2>
            </MessageWrapSecond2>
            <PersImg2 src={pers2} alt="" />
          </MessageWrapSecond>
        </ChatWrap>
        <BottomText>
          *** Все результаты индивидуальны и зависят от способностей участника
        </BottomText>
      </GreyContainer>
    </GreySect>
  );
};

export default GreySection;
