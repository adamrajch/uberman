import styled from "styled-components";
import Box from "./programBox";
import db from "./tempdb";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 1em;
`;
export default function bigbox() {
  // const classes = useStyles();

  const mappedBoxes = db.map((box, index) => {
    return <Box title={box.title} img={box.img} key={index} />;
  });
  return <Container>{mappedBoxes}</Container>;
}
