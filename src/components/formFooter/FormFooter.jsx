import React from "react";
import {
  FormFooterSection,
  BannerWrapper,
  FormWrap,
  FormFooterContainer,
  InputPhone,
  InputPhoneWrap,
  FlagImg,
  PersonImg2,
  PlaceWrap,
  FormButton,
} from "./FormFooter.styled";
import person4 from "../../assets/img/image 6.png";
import flag from "../../assets/svg/Flags.svg";

const FormFooter = () => {
  return (
    <FormFooterSection>
      <FormFooterContainer>
        <BannerWrapper>
          <PersonImg2 src={person4} alt="" />
          <h3>
            Успейте <br /> получить курс <br /> прямо сейчас <br />
            <b>бесплатно!</b>
          </h3>
          <FormWrap>
            <form action="">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Email" />
              <InputPhoneWrap>
                <PlaceWrap>
                  <FlagImg src={flag} alt="" />
                  <p>+380</p>
                </PlaceWrap>
                <InputPhone type="phone" />
              </InputPhoneWrap>
              <FormButton>Получить курс</FormButton>
            </form>
          </FormWrap>
        </BannerWrapper>
      </FormFooterContainer>
    </FormFooterSection>
  );
};

export default FormFooter;
