import styled from "styled-components";

const ProgramBox = styled.div`
  height: 200px;
  width:20vw;
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.3)), url("${props =>
    props.img}")  ;
  display:inline-block;
  border: 2px solid white;
  object-fit: cover;
  background-size:cover;
  position: relative;
  margin: 0.5em;
 
  &:hover{
      cursor:pointer;
  }

  &.boxy:hover{
  
   filter:opacity(80%)
  }

  .title:hover{
  
  }
`;
const ProgramTitle = styled.div`
  color: white;
  width: 100%;
  height: 20%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 70%;
  right: 0;
  // margin: auto;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  background: rgba(36, 37, 42, 0.3);
  // box-shadow: 0 1px 1px rgba(0, 0, 0.1);
`;
const Box = props => {
  return (
    <ProgramBox img={props.img} className="boxy" as="a" href="">
      <ProgramTitle className="title">{props.title}</ProgramTitle>
    </ProgramBox>
  );
};

export default Box;
