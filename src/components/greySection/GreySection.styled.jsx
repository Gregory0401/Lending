import styled from "styled-components";
import gr from "../../assets/img/grey.png";

export const GreySect = styled.section`
  background-image: url(${gr});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 2022px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 90px;
    color: #061a2f;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 60px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 500px) {
      font-size: 30px;
      width: 280px;
      margin-bottom: 80px;
    }
  }
`;

export const ChatWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 1180px) {
    gap: 25px;
  }
`;

export const GreyContainer = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  margin: 0 auto;
  max-width: 1040px;
`;

export const MessageWrap = styled.div`
  position: relative;
  display: flex;
  align-items: end;

  margin-left: -500px;

  @media (max-width: 1180px) {
    margin-left: -100px;
    height: 200px;
  }
  @media (max-width: 500px) {
    margin-left: -5px;
  }
`;

export const PersImg = styled.img`
  width: 86px;
  height: 86px;

  @media (max-width: 500px) {
    width: 66px;
    height: 66px;
    margin-bottom: -20px;
    margin-right: -20px;
  }
`;

export const MessageWrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 230px;

  @media (max-width: 1180px) {
    width: 280px;
  }

  img {
    position: absolute;
    @media (max-width: 1180px) {
      height: 230px;
      width: 280px;
    }
    @media (max-width: 500px) {
      height: 250px;
      width: 230px;
    }
  }
`;

export const TextWrap = styled.p`
  position: relative;
  text-align: start;
  width: 480px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 22px;
  font-weight: 400;
  margin-left: 76px;

  @media (max-width: 1180px) {
    width: 300px;
    font-size: 16px;
    font-weight: 400;
    margin-left: 26px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 400;
    margin-left: 16px;
    width: 220px;
    padding: 10px 25px;
  }
`;

export const MessageWrapSecond = styled.div`
  position: relative;
  display: flex;
  align-items: end;

  margin-left: 500px;
  margin-bottom: 60px;

  @media (max-width: 1180px) {
    margin-left: 100px;
  }

  @media (max-width: 500px) {
    margin-left: 5px;
  }
`;

export const MessageWrapSecond2 = styled.div`
  display: flex;
  justify-content: center;
  width: 580px;
  height: 230px;

  @media (max-width: 1180px) {
    width: 300px;
  }

  img {
    position: absolute;

    @media (max-width: 1180px) {
      height: 250px;
      width: 230px;
    }
  }
`;

export const TextWrap2 = styled.p`
  position: relative;
  text-align: start;
  width: 480px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 22px;
  font-weight: 400;
  margin-left: 26px;
  padding-top: 30px;

  @media (max-width: 1180px) {
    width: 300px;
    font-size: 16px;
    font-weight: 400;
    margin-left: 26px;
    padding-top: 5px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 400;
    margin-left: 16px;
    width: 220px;
    padding: 10px 25px;
  }
`;

export const PersImg2 = styled.img`
  width: 86px;
  height: 86px;

  @media (max-width: 500px) {
    width: 66px;
    height: 66px;
    margin-bottom: -40px;
  }
`;

export const BottomText = styled.p`
  text-align: center;

  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;
