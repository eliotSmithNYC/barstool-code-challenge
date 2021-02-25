import React from "react";
import BoxScoreTable from "./BoxScoreTable";
import VersusBanner from "./VersusBanner";
import { makeStyles } from "@material-ui/core/styles";
import { getMLBData } from "./api";

const useStyles = makeStyles({
  root: {
    width: "75%",
    border: [["1px", "solid", "#CCCCCC"]],
    borderRadius: "5px"
  }
});

const data = getMLBData();

export default function BoxScore() {
  const classes = useStyles();

  const { teamRecords, homeTeamLastName, awayTeamLastName, status } = data;

  return (
    <div className={classes.root}>
      <BoxScoreTable data={data} />
      <VersusBanner
        teamRecords={teamRecords}
        homeTeamLastName={homeTeamLastName}
        awayTeamLastName={awayTeamLastName}
        status={status}
      />
    </div>
  );
}
