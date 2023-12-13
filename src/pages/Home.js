import styled from "styled-components";

const Wrap = styled.div`
  max-width: 480px;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 50px;
`;
const Sub = styled.p`
  font-size: 40px;
`;

export const Home = () => {
  return (
    <Wrap>
      <Title>하림아 공부하자! 싫어잉</Title>
      <Sub>잠온다 진짜 개많이</Sub>
    </Wrap>
  );
};
