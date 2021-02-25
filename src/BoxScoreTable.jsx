import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  header: {
    width: "1em",
    backgroundColor: "#d6d4d2"
  },
  additional: {
    backgroundColor: "#d6d4d2"
  }
});

export default function BoxScoreTable({
  data: {
    awayPeriodScores,
    awayTeamAbbreviation,
    homeTeamAbbreviation,
    homePeriodScores,
    additionalInfo: {
      headers: additionalHeaders,
      home: homeTeamAdditionalInfo,
      away: awayTeamAdditionalInfo
    }
  }
}) {
  const classes = useStyles();

  return (
    <TableContainer
      components={{
        Container: (props) => <Paper {...props} elevation={0} />
      }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}></TableCell>
            {awayPeriodScores.map((score, i) => (
              <TableCell key={`header${i}`}>{i + 1}</TableCell>
            ))}
            {additionalHeaders.length > 0 &&
              additionalHeaders.map((header, j) => (
                <TableCell className={classes.additional} key={`header${j}`}>
                  {header}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.header} component="th" scope="row">
              {awayTeamAbbreviation}
            </TableCell>
            {awayPeriodScores.map((s, i) => (
              <TableCell key={`scoreCell${i}`}>{s}</TableCell>
            ))}
            {awayTeamAdditionalInfo.length > 0 &&
              awayTeamAdditionalInfo.map((data, i) => (
                <TableCell
                  key={`additionalInfoCell${i}`}
                  className={classes.additional}
                >
                  {data}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell className={classes.header} component="th" scope="row">
              {homeTeamAbbreviation}
            </TableCell>
            {homePeriodScores.map((s, i) => (
              <TableCell key={`scoreCell${i}`}>{s}</TableCell>
            ))}
            {homeTeamAdditionalInfo.length > 0 &&
              homeTeamAdditionalInfo.map((data, i) => (
                <TableCell
                  className={classes.additional}
                  key={`additionalInfoCell${i}`}
                >
                  {data}
                </TableCell>
              ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
