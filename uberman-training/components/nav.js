import styled from "styled-components";

const Nav = styled.div`
  padding: 0;
  margin: 0;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  padding: 0;
  margin: 0;
  color: blue;
  font-weight: 700;
`;

const UL = styled.ul`
  // margin: auto;
  // display: flex;
  // justify-content: space-between;
  // color: black;
  // text-decoration: none;
`;

const LI = styled.li`
  text-decoration: none;
`;
const myNav = () => {
  return (
    <Nav>
      <Logo>Uberman</Logo>
      <UL>
        <LI>hsdfi</LI>
        <LI>bye</LI>
      </UL>
    </Nav>
  );
};

export default myNav;
