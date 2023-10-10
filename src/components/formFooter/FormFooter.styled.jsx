import styled from "styled-components";

export const FormFooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 730px;
`;

export const FormFooterContainer = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 50px;
  border-radius: 34px;
  position: relative;
  background: rgb(37, 99, 235, 0.7);
  background: linear-gradient(
    180deg,
    rgba(37, 99, 235, 0.8) 23%,
    rgba(35, 99, 236, 0.6) 94%
  );

  @media (max-width: 1270px) {
    width: 1000px;
    padding: 20px;
    height: 420px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 468px;
    padding: 10px;
    height: 780px;
    margin-top: 250px;
  }

  @media (max-width: 490px) {
    width: 300px;
    margin-bottom: 50px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 52px;
    text-transform: uppercase;
    font-weight: 400;
    color: #fff;
    margin-right: 50px;

    @media (max-width: 1270px) {
      font-size: 42px;
      margin-right: 30px;
    }

    @media (max-width: 1024px) {
      margin-top: 20px;
      margin-bottom: 40px;
    }

    @media (max-width: 490px) {
      font-size: 26px;
      line-height: 35px;
      margin-top: 40px;
    }

    b {
      font-weight: 900px;
    }
  }
`;

export const PersonImg2 = styled.img`
  width: 362px;
  margin-left: -100px;
  margin-right: 50px;

  @media (max-width: 1270px) {
    width: 240px;
    margin-left: -80px;
  }

  @media (max-width: 1024px) {
    margin-left: 240px;
    margin-top: -220px;
  }

  @media (max-width: 490px) {
    width: 200px;
    margin-left: 90px;
    margin-top: -260px;
  }
`;

export const FormWrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: -40px;

    @media (max-width: 1270px) {
      margin-top: 0;
    }

    @media (max-width: 490px) {
      margin-top: 20px;
    }
  }
  input {
    width: 290px;
    height: 46px;
    border-radius: 10px;
    border: none;
    color: #003366;
    outline: none;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.text};

    @media (max-width: 490px) {
      width: 260px;
    }
  }
  ::placeholder {
    color: #003366;
    font-size: 16px;
    font-weight: 800px;
  }
`;

export const InputPhoneWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 230px;

  p {
    color: #fff;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.text};
  }
`;
export const FlagImg = styled.img`
  width: 40px;
`;

export const InputPhone = styled.input`
  width: 200px !important;
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;

  @media (max-width: 490px) {
    width: 170px !important;
  }
`;

export const PlaceWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: -230px;
  background-color: #949aaf;
  padding: 2px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const FormButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 20px;
  display: inline-block;
  width: 456px;
  height: 74px;
  border-radius: 45px;
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

  @media (max-width: 1270px) {
    bottom: 20px;
    width: 356px;
    right: 60px;
  }

  @media (max-width: 490px) {
    bottom: 70px;
    width: 260px;
    right: 20px;
  }
`;
