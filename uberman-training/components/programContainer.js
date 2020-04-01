import styled from "styled-components";
import Box from "./programBox";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import db from "./tempdb";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "70vw",
    margin: "auto"
  }
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   // color: theme.palette.text.secondary,
  // },
}));

export default function bigbox() {
  const classes = useStyles();

  const mappedBoxes = db.map((box, index) => {
    return (
      <div>
        <Grid item xs={8} sm={6} lg={3}>
          <Box title={box.title} img={box.img} />
        </Grid>
      </div>
    );
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {mappedBoxes}
      </Grid>
    </div>
  );
}
