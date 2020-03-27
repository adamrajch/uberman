import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledMenuItem = withStyles({
  root: {
    // background: '#bbe1fa',
    // borderRadius: 3,
    // border: 0,
    color: "#1b262c"
    // height: 48,
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
  //   label: {
  //     textTransform: 'capitalize',
  //   },
})(MenuItem);

export default function ClassesShorthand() {
  return <StyledMenuItem>classes shorthand</StyledMenuItem>;
}
