import styled from "styled-components";

const LandingContainer = styled.div`
  min-height: 87vh;
  background-image: url("/splash1.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Header = styled.h1`
  color: #eeeeee;
`;
const Para = styled.p`
  color: #eeeeee;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Header>Ultimate fitness app</Header>
      <Para>
        Comprehensive resources, programs, and tooling needed for hobbyists and
        champions
      </Para>
    </LandingContainer>
  );
};
export default Landing;
