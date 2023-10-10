import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: -webkit-linear-gradient(
    62deg,
    rgb(255, 128, 244),
    #ffffff,
    rgb(66, 255, 173, 0.5)
  );
  background: linear-gradient(
    62deg,
    rgb(255, 128, 244, 0.5),
    #ffffff,
    rgb(66, 255, 173, 0.5)
  );

  @media (max-width: 768px) {
    background: -webkit-linear-gradient(
      165deg,
      rgb(255, 128, 244, 0.2),
      #ffffff,
      rgb(99, 248, 184, 0.3)
    );
    background: linear-gradient(
      165deg,
      rgb(255, 128, 244, 0.6),
      #ffffff,
      rgb(82, 248, 176, 0.2)
    );
  }

  h2 {
    text-align: center;
    margin-top: 100px;
    color: #061a2f;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 52px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 80px;

    @media (max-width: 1024px) {
      font-size: 42px;
      margin-top: 70px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      width: 280px;
    }
  }
`;

export const ContainerFooter = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
  max-width: 1040px;
`;

export const SolutionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 114px;
  margin-bottom: 150px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 96px;
  }
`;

export const Negative = styled.div`
  height: 670px;
  width: 400px;
  border-radius: 44px;
  border: 3px solid #f91a23;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 1024px) {
    height: 600px;
    width: 300px;
    padding: 0 10px;
  }

  @media (max-width: 760px) {
    height: 640px;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 45px;
    color: #ea5050;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 1024px) {
      margin-top: 30px;
      margin-bottom: 30px;
      font-size: 20px;
      width: 140px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 96px;
    }
  }

  ul {
    margin-bottom: 50px;
  }

  li {
    list-style: disc;
    width: 200px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 500;
    color: #051529;

    @media (max-width: 1024px) {
      margin-left: 20px;
      width: 200px;
    }
  }

  p {
    color: #f91a23;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 24px;
    font-weight: 800;

    @media (max-width: 1024px) {
      font-size: 18px;
      font-weight: 800;
      text-align: center;
      width: 240px;
    }
  }
`;

export const Positive = styled.div`
  height: 670px;
  width: 400px;
  border-radius: 44px;
  border: 3px solid #0bc162;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 1024px) {
    height: 600px;
    width: 300px;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 45px;
    color: #0bc162;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 1024px) {
      margin-top: 30px;
      margin-bottom: 30px;
      font-size: 20px;
      width: 180px;
      text-align: center;
    }
  }
  ul {
    margin-bottom: 50px;
  }

  li {
    list-style: disc;
    width: 260px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 500;
    color: #051529;

    @media (max-width: 1024px) {
      margin-left: 20px;
      width: 240px;
    }
  }

  p {
    color: #0bc162;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 24px;
    font-weight: 800;

    @media (max-width: 1024px) {
      font-size: 18px;
      font-weight: 800;
      text-align: center;
      width: 240px;
    }
  }
`;
