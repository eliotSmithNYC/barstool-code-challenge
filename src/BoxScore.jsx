import React from "react";
import BoxScoreTable from "./BoxScoreTable";
import VersusBanner from "./VersusBanner";
import { makeStyles } from "@material-ui/core/styles";
import { parseMLBData } from "./api";

const useStyles = makeStyles({
  root: {
    width: "75%",
    border: [["1px", "solid", "#CCCCCC"]],
    borderRadius: "5px"
  }
});


export default function BoxScore({ data }) {
  const { teamRecords, homeTeamLastName, awayTeamLastName, status } = data;
  const classes = useStyles();

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
