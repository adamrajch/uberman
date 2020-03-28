import styled from "styled-components";

const ProgramBox = styled.div`
  height: 200px;
  width:20vw;
   background:url("${props => props.img}") ;
display:inline-block;
  border: 2px solid white;
  object-fit: cover;
  background-size:cover;
  position: relative;
margin: 0.5em;

  &hover:{
      opacity:0.5;
      font-weight:700;
  }
`;
const ProgramTitle = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 50%;
`;
const Box = props => {
  return (
    <ProgramBox img={props.img}>
      <ProgramTitle>{props.title}</ProgramTitle>
    </ProgramBox>
  );
};

export default Box;
