import styled from "styled-components";
import colorD from "../../assets/img/Rectangle59.png";

export const ReasonSection = styled.section`
  background-image: url(${colorD});
  background-repeat: no-repeat;
  background-size: cover;
  height: 750;
  opacity: 0.9;
  height: 1000px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    height: 1155px;
  }

  @media (max-width: 776px) {
    height: 1130px;
  }

  @media (max-width: 608px) {
    height: 1150px;
  }

  @media (max-width: 474px) {
    height: 1185px;
  }

  @media (max-width: 380px) {
    height: 1160px;
  }
`;

export const WorldMap = styled.img`
  width: 100%;
  height: 690px;
  display: block;
  position: absolute;
  margin-top: 200px;

  @media (max-width: 1024px) {
    height: 700px;
    transform: rotate(90deg);
    margin-top: 240px;
  }

  @media (max-width: 768px) {
    height: 500px;
    transform: rotate(90deg);
    margin-top: 200px;
    margin-left: -50px;
  }

  @media (max-width: 550px) {
    height: 300px;
    margin-left: 0;
  }

  @media (max-width: 340px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1240px;

  h2 {
    text-align: center;
    color: #004796;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 60px;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 50px;
      padding-top: 20px;
      margin-bottom: 300px;
    }

    @media (max-width: 776px) {
      font-size: 30px;
    }
  }
`;

export const InfoWrap = styled.div`
  margin-top: 282px;
  margin-left: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;

  @media (max-width: 1520px) {
    margin-left: -420px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-left: 0;
  }

  @media (max-width: 928px) {
    gap: 57px;
  }

  @media (max-width: 608px) {
    gap: 150px;
  }
`;

export const PersonWrap = styled.div`
  z-index: 22;

  img {
    height: 700px;

    @media (max-width: 1024px) {
      height: 500px;
      margin-bottom: 20px;
    }

    @media (max-width: 928px) {
      margin-left: -100px;
      max-width: initial !important;
    }
    @media (max-width: 550px) {
      margin-left: -300px;
    }

    @media (max-width: 380px) {
      height: 450px;
    }
  }
`;

export const ReasonListWrap = styled.div``;

export const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1520px) {
  }
`;

export const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h4 {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #0097f0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #fff;
    font-size: 36px;
    font-weight: 300;

    @media (max-width: 1240px) {
      height: 50px;
      width: 50px;
      padding: 10px;
      font-size: 26px;
    }
    @media (max-width: 1024px) {
      height: 60px;
      width: 60px;
      padding: 20px;
      font-size: 36px;
    }

    @media (max-width: 608px) {
      height: 50px;
      width: 50px;
      padding: 10px;
      font-size: 26px;
    }
  }

  p {
    color: #003366;
    font-size: 24px;
    font-weight: 500;
    width: 400px;

    @media (max-width: 1240px) {
      font-size: 18px;
      font-weight: 500;
      width: 300px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
    }

    @media (max-width: 608px) {
      font-size: 18px;
      width: 300px;
    }

    @media (max-width: 380px) {
      font-size: 16px;
      width: 250px;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 216px;
  height: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 40%;
  border-top-left-radius: 40%;
  position: absolute;
  bottom: 120px;
  right: 0;
  padding: 20px;
  background-color: rgba(12, 242, 54, 1);
  background: -o-linear-gradient(
    -45deg,
    rgba(12, 242, 54, 1) 0%,
    rgba(12, 242, 38, 1) 10.75%,
    rgba(12, 99, 243, 1) 100%
  );
  background: -moz-linear-gradient(
    -45deg,
    rgba(12, 242, 54, 1) 0%,
    rgba(12, 242, 38, 1) 10.75%,
    rgba(12, 99, 243, 1) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(12, 242, 54, 1) 0%,
    rgba(12, 242, 38, 1) 10.75%,
    rgba(12, 99, 243, 1) 100%
  );
  background: linear-gradient(
    -225deg,
    rgba(12, 242, 54, 1) 0%,
    rgba(12, 242, 38, 1) 10.75%,
    rgba(12, 99, 243, 1) 100%
  );
  transition: all ease 0.6s;

  @media (max-width: 1140px) {
    bottom: 10px;
  }

  @media (max-width: 1024px) {
    bottom: 360px;
  }
  @media (max-width: 608px) {
    bottom: 450px;
  }

  @media (max-width: 410px) {
    bottom: 420px;
  }

  @media (max-width: 380px) {
    bottom: 430px;
    width: 200px;
    height: 160px;
  }

  button {
    display: inline-block;
    width: 135px;
    height: 135px;
    border-radius: 50%;
    border: 3px solid white;
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    margin-left: 15px;
    background-color: rgba(12, 242, 54, 1);
    background: -o-linear-gradient(
      270deg,
      rgba(12, 242, 54, 1) 0%,
      rgba(12, 242, 38, 1) 10.75%,
      rgba(12, 99, 243, 1) 100%
    );
    background: -moz-linear-gradient(
      270deg,
      rgba(12, 242, 54, 1) 0%,
      rgba(12, 242, 38, 1) 10.75%,
      rgba(12, 99, 243, 1) 100%
    );
    background: -webkit-linear-gradient(
      270deg,
      rgba(12, 242, 54, 1) 0%,
      rgba(12, 242, 38, 1) 10.75%,
      rgba(12, 99, 243, 1) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(12, 242, 54, 1) 0%,
      rgba(12, 242, 38, 1) 10.75%,
      rgba(12, 99, 243, 1) 100%
    );
  }
`;
