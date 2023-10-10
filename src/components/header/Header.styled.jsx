import styled from "styled-components";
import bgi from "../../assets/img/backGround.jpg";

export const HeaderSection = styled.section`
  background-image: url(${bgi});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 790px;

  @media (max-width: 1050px) {
    height: 800px;
  }

  @media (max-width: 768px) {
    height: 840px;
  }
  @media (max-width: 580px) {
    height: 810px;
  }
`;

export const LogoWrap = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1240px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  gap: 180px;

  @media (max-width: 1050px) {
    padding-top: 80px;
    gap: 60px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 1px;
  }
  @media (max-width: 580px) {
    padding-top: 70px;
  }
`;

export const Person = styled.div``;

export const PersonIcon = styled.img`
  height: 720px;

  @media (max-width: 1050px) {
    margin-left: -160px;
  }

  @media (max-width: 768px) {
    height: 580px;
    margin-left: 20px;
    margin-top: -300px;
  }

  @media (max-width: 580px) {
    height: 400px;
    margin-left: -3px;
  }
`;

export const Cyrcle = styled.div`
  width: 432px;
  height: 432px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin-bottom: 250px;
  margin-left: -300px;
  margin-right: -100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(12, 242, 169, 1);
  background: -o-linear-gradient(
    225deg,
    rgba(12, 242, 169, 1) 0%,
    rgba(11, 239, 220, 1) 36.25%,
    rgba(12, 77, 242, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    rgba(12, 242, 169, 1) 0%,
    rgba(11, 239, 220, 1) 36.25%,
    rgba(12, 77, 242, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    rgba(12, 242, 169, 1) 0%,
    rgba(11, 239, 220, 1) 36.25%,
    rgba(12, 77, 242, 1) 100%
  );
  background: linear-gradient(
    225deg,
    rgba(12, 242, 169, 1) 0%,
    rgba(11, 239, 220, 1) 36.25%,
    rgba(12, 77, 242, 1) 100%
  );

  @media (max-width: 1050px) {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin-bottom: 250px;
    margin-left: -300px;
    margin-right: -200px;
  }

  @media (max-width: 780px) {
    width: 290px;
    height: 290px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin-bottom: 250px;
    margin-left: 0;
    margin-right: 0;
    margin-top: -60px;
  }

  @media (max-width: 580px) {
    width: 218px;
    height: 218px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  b {
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    color: #fff;

    @media (max-width: 1050px) {
      font-size: 60px;
    }
    @media (max-width: 768px) {
      font-size: 40px;
      font-weight: 700;
    }
  }

  p {
    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-top: 20px;

    @media (max-width: 1050px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 580px) {
      font-size: 16px;
    }
  }
`;

export const Baner = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1100px;
  height: 150px;
  background-color: rgb(9, 51, 82, 0.9);
  border-radius: 45px;

  position: relative;
  margin: 0 auto;
  margin-top: -150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;

  @media (max-width: 1050px) {
    max-width: 900px;
    height: 120px;
  }

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 580px) {
    width: 300px;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    margin-top: -80px;
  }

  b {
    font-size: 68px;
    font-weight: 800;
    color: #fff;

    @media (max-width: 1050px) {
      font-size: 48px;
      padding-right: 10px;
      padding-left: 10px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      line-height: 50px;
      font-size: 38px;
    }

    @media (max-width: 580px) {
      display: inline-block;
      width: 270px;
      margin-left: 14px;
      font-size: 46px;
    }
  }
  p {
    font-size: 26px;
    text-align: center;
    color: #fff;
    text-align: start;

    @media (max-width: 1050px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 580px) {
      display: inline-block;
      width: 250px;
      margin-left: 20px;
      margin-top: 5px;
      margin-bottom: 20px;
      font-size: 22px;
    }
  }

  button {
    margin-right: 44px;
    display: inline-block;
    width: 300px;
    height: 74px;
    border-radius: 45px;
    border: 2px solid #fff;
    font-size: 30px;
    text-align: center;
    color: #fff;
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

    @media (max-width: 1050px) {
      width: 260px;
      margin-right: 10px;
    }

    @media (max-width: 768px) {
      margin-right: 10px;
      width: 300px;
      height: 75px;
      border-radius: 45px;
      font-size: 18px;
      margin-left: -100px;
    }

    @media (max-width: 580px) {
      margin-right: -77px;
      width: 290px;
      height: 85px;
      border-radius: 45px;
      font-size: 28px;
      margin-bottom: 20px;
    }
  }

  button:hover {
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

export const Info = styled.div`
  display: flex;
  margin-top: -80px;

  @media (max-width: 1050px) {
    margin-top: -100px;
  }

  @media (max-width: 768px) {
    margin-top: -80px;
  }
  @media (max-width: 580px) {
    margin-top: -50px;
    margin-bottom: 5px;
  }
`;

export const Span1 = styled.span`
  display: inline-block;
  width: 100px;
  margin-left: 200px;
  color: #fff;
  padding-bottom: 20px;
  font-size: 20px;

  @media (max-width: 1050px) {
    margin-left: 150px;
  }
  @media (max-width: 768px) {
    margin-left: 120px;
  }
  @media (max-width: 580px) {
    margin-left: 45px;
  }
`;
export const Span2 = styled.span`
  display: inline-block;
  width: 170px;
  margin-left: 200px;
  color: #fff;

  font-size: 11px;

  @media (max-width: 1050px) {
    margin-left: 100px;
  }

  @media (max-width: 768px) {
    margin-left: 160px;
  }

  @media (max-width: 580px) {
    margin-left: 25px;
    width: 120px;
  }
`;
