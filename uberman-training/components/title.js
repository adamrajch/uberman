import styled from "styled-components";
const Title = styled.div`
  text-align: center;
  color: #bbe1fa;
  font-size: 2em;
  margin-top: 2em;
  letter-spacing: 0.2em;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 2.5em;
`;
const pageTitle = (props) => {
  return <Title>{props.title}</Title>;
};

export default pageTitle;
