import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const StyledMenuItem = withStyles({
  root: {
    // background: "#bbe1fa",
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

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="men">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>about</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>programs</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>gains</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>login</StyledMenuItem>
      </Menu>
      <style jsx>
        {`
          .burger div {
            width: 25px;
            height: 4px;
            background-color: #bbe1fa;
            margin: 4px;
          }
        `}
      </style>
    </div>
  );
}
