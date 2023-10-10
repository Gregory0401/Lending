import styled from "styled-components";
import dreamBg from "../../assets/img/dream-sec.png";

export const DreamSection = styled.section`
  background-image: url(${dreamBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1840px;

  @media (max-width: 1800px) {
    margin-bottom: -25px;
  }

  @media (max-width: 1070px) {
    height: 1440px;
    margin-bottom: -20px;
  }

  @media (max-width: 768px) {
    height: 2100px;
    margin-bottom: -30px;
  }
`;

export const OpacityWrap = styled.div`
  img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 1200px;
  }
`;

export const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1040px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DreamList = styled.div`
  margin-top: -900px;
  height: 580px;
  width: 1040px;
  border: dashed #fff;
  border-radius: 47px;
  background-color: rgb(255, 255, 255, 0.4);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1070px) {
    width: 768px;
    height: 460px;
    margin-top: -1000px;
  }

  @media (max-width: 768px) {
    width: 425px;
    height: 740px;
  }

  @media (max-width: 440px) {
    width: 310px;
    height: 700px;
    margin-top: -1100px;
  }

  h2 {
    margin-top: 40px;
    font-size: 44px;
    color: #000;
    text-transform: uppercase;

    @media (max-width: 1070px) {
      margin-top: 30px;
      font-size: 34px;
    }
    @media (max-width: 440px) {
      margin-top: 40px;
      font-size: 24px;
    }
  }
`;

export const GridContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
    margin-top: -120px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 440px) {
    gap: 40px;
    margin-bottom: 50px;
  }
`;

export const GridContainerItem = styled.div`
  height: 134px;
  width: 440px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: -2px 0 0 2px #0bef85, -2px -2px 0 2px #0cbcf2,
    -2px 2px 0 2px #0c8bf2, 0 -2px 0 2px #0cb1f2, 0 2px 0 2px #0c96f2,
    2px -2px 0 2px #0c9ef2, 2px 2px 0 2px #0c96f2, 2px 0 0 2px #0bef7d;

  display: flex;
  align-items: center;

  @media (max-width: 1070px) {
    width: 340px;
  }

  @media (max-width: 440px) {
    width: 280px;
    height: 100px;
  }

  img {
    margin-left: 50px;

    @media (max-width: 440px) {
      width: 50px;
      margin-left: 10px;
    }
  }

  p {
    font-size: 22px;
    font-weight: 800;
    color: #061a2f;
    margin-left: 40px;

    @media (max-width: 440px) {
      font-size: 16px;
      font-weight: 800;
      margin-left: 20px;
    }
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 107px;
  }
`;

export const DreamStepList = styled.div`
  height: 580px;
  width: 1040px;
  border-radius: 47px;
  text-align: center;

  background: rgba(12, 242, 81, 0.7);
  background: -o-linear-gradient(
    225deg,
    rgba(12, 242, 81, 0.8) 0%,
    rgba(12, 242, 38, 0.8) 5.5%,
    rgba(63, 169, 230, 0.8) 34.75%
  );
  background: -moz-linear-gradient(
    225deg,
    rgba(12, 242, 81, 0.8) 0%,
    rgba(12, 242, 38, 0.8) 5.5%,
    rgba(63, 169, 230, 0.8) 34.75%
  );
  background: -webkit-linear-gradient(
    225deg,
    rgba(12, 242, 81, 0.8) 0%,
    rgba(12, 242, 38, 0.8) 5.5%,
    rgba(63, 169, 230, 0.8) 34.75%
  );
  background: linear-gradient(
    225deg,
    rgba(12, 242, 81, 0.8) 0%,
    rgba(12, 242, 38, 0.8) 5.5%,
    rgba(63, 169, 230, 0.8) 34.75%
  );

  @media (max-width: 1070px) {
    width: 768px;
    height: 460px;
  }

  @media (max-width: 768px) {
    width: 425px;
    height: 940px;
  }

  @media (max-width: 440px) {
    width: 310px;
    height: 900px;
  }

  h2 {
    padding-top: 50px;
    font-size: 44px;
    color: #fff;
    text-transform: uppercase;

    @media (max-width: 1070px) {
      padding-top: 40px;
      font-size: 34px;
    }

    @media (max-width: 440px) {
      padding-top: 30px;
      font-size: 24px;
    }
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    color: #fff;
    margin-bottom: 60px;

    @media (max-width: 1070px) {
      margin-top: 20px;
      font-size: 22px;
      margin-bottom: 30px;
    }

    @media (max-width: 440px) {
      font-size: 18px;
      width: 297px;
    }
  }
`;

export const ColumnWrap = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StepsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 20px;
  font-weight: 800;
  color: #003366;

  @media (max-width: 1070px) {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
  }

  :first-child {
    color: #fff;
    background-color: #17b227;
  }
`;

export const StepItem = styled.div`
  height: 123px;
  width: 123px;
  border-radius: 50%;
  border: dashed #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1070px) {
    height: 100px;
    width: 100px;
  }
`;

export const Arrow2 = styled.img`
  width: 133px;

  @media (max-width: 1070px) {
    width: 60px;
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

export const StepsList2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-top: 25px;

  @media (max-width: 1070px) {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 120px;
    margin-top: -20px;

    @media (max-width: 440px) {
      gap: 125px;
      margin-top: -20px;
      margin-left: -15px;
    }
  }
`;

export const StepItem2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;

  @media (max-width: 1070px) {
    max-width: 190px;
  }
  @media (max-width: 440px) {
    max-width: 100px;
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 14px;
    font-weight: 400;
  }
`;
