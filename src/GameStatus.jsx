import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "4em"
  }
});

export default function TeamNameAndRecord(props) {
  const { status } = props;
  const splitStatus = status.split(",");
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {splitStatus.map((item, i) => (
        <span key={`statusInfo${i}`}>{item}</span>
      ))}
    </div>
  );
}
