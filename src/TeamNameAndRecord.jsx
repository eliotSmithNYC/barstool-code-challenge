import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => (props.isHome ? "red" : "blue"),
    color: "white",
    display: "flex",
    flexGrow: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "4em"
  },
  name: {
    fontSize: "2em"
  },
  record: {}
});

export default function TeamNameAndRecord(props) {
  const {
    isHome = false,
    name,
    record: { wins, losses }
  } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <span className={classes.name}>{name.toUpperCase()}</span>
      <span className={classes.record}>{`${wins} - ${losses}`}</span>
    </div>
  );
}
