import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = styled.div`
  height: 3vh;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  // background: #27496d;
  filter: opacity(90%);
`;
const Name = styled.span`
  margin: 0.5em;
`;
const Icon = styled.a`
  padding: 0.3em;
  color: white;
`;
const Foot = () => {
  return (
    <Footer>
      <Name>Adam Rajchwald</Name>
      <Icon as="a" href="https://github.com/adamrajch" target="_blank">
        <GitHubIcon />
      </Icon>
    </Footer>
  );
};

export default Foot;
