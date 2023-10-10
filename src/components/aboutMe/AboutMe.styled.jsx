import styled from "styled-components";
import bgf from "../../assets/img/fon.png";

export const AboutMeSection = styled.section`
  background-image: url(${bgf});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 720px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 67px;
  gap: 90px;

  @media (max-width: 768px) {
    gap: 70px;
    padding-top: 40px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 500;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  p {
    width: 800px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 24px;
    font-weight: 500;
    background-color: rgb(191, 195, 201, 0.6);
    padding: 25px 100px 25px 35px;
    border-radius: 42px;

    @media (max-width: 1050px) {
      width: 700px;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      height: 420px;
      width: 292px;
      padding: 20px 20px 20px 20px;
      font-size: 16px;
    }
  }

  img {
    width: 320px;
    height: 320px;
    margin-left: -80px;

    @media (max-width: 1050px) {
      margin-left: -110px;
    }
    @media (max-width: 768px) {
      width: 180px;
      height: 180px;
      margin-left: 140px;
      margin-top: -80px;
    }
  }
`;
