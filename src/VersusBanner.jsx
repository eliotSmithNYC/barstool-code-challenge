import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamNameAndRecord from "./TeamNameAndRecord";
import GameStatus from "./GameStatus";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  teamName: {
    flexGrow: 1
  },
  status: {
    flexGrow: 3
  }
});

export default function VersusBanner({
  teamRecords: { homeRecord, awayRecord },
  homeTeamLastName,
  awayTeamLastName,
  status
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TeamNameAndRecord
        className={classes.teamName}
        isHome={true}
        name={homeTeamLastName}
        record={homeRecord}
      />
      <GameStatus className={classes.status} status={status} />
      <TeamNameAndRecord
        className={classes.teamName}
        isHome={false}
        name={awayTeamLastName}
        record={awayRecord}
      />
    </div>
  );
}
