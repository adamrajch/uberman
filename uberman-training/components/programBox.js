import styled from "styled-components";

const ProgramBox = styled.div`
  height: 180px;
  // flex-grow:1;
  flex-shrink: 0;
  flex-basis: 80%;
  // flex-basis: 200px;
  display: flex;
  display: inline-block;
  border: 2px solid white;
  background-position: center;
  position: relative;
  margin: 0.5em;

  &:hover {
    cursor: pointer;
  }
  &.boxy:hover {
    filter: opacity(100%);
  }
`;
const Bg = styled.div`
height:100%;
width:100%;
background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.3)), url("${(
  props
) => props.img}");
object-fit: cover;
background-size:cover;
filter: blur(3px);
display:flex;
`;
const ProgramTitle = styled.div`
  color: white;
  // width: 33.33%;
  height: 30%;
  text-align: center;
  position: absolute;
  border: 2px solid white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.3); /* Black w/opacity/see-through */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em 0 1em;
`;
const Box = (props) => {
  return (
    <ProgramBox className="boxy" as="a" href="/">
      <Bg img={props.img} />
      <ProgramTitle className="title">{props.title}</ProgramTitle>
    </ProgramBox>
  );
};

export default Box;
