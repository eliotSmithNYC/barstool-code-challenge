import _ from "lodash";
import moment from "moment-timezone";
let mlbData = require("./MLB.JSON");

// status upComing, inProgress, completed, extraInnings

const getNumberOfPeriods = (regulationPeriods, status = "completed") => {
  if (status === "completed" || status === "upcoming") {
    return regulationPeriods;
  }
  let inning = status.match(/\d+/g) || regulationPeriods;
  return inning;
};

const fillInScores = (scoreArray, regulationPeriods, status) => {
  let result = [...scoreArray];
  const numberOfInnings = getNumberOfPeriods(regulationPeriods, status);
  const numToFillIn = numberOfInnings - scoreArray.length;
  if (numToFillIn > 0) {
    _.range(numToFillIn).forEach((i) => (result = [...result, "-"]));
  }
  return result;
};

const getStatusText = (status, startTime) => {
  switch (status) {
    case "completed":
      return "Final";
    case "upcoming":
      return moment(startTime).format("MM/D, h:mm a");
    default:
      return status;
  }
};

export const getMLBData = () => {
  const realScores = fillInScores([1], 9);
  const {
    away_team: {
      abbreviation: awayTeamAbbreviation,
      last_name: awayTeamLastName,
      season_wins: awayTeamRecordWins,
      season_losses: awayTeamRecordLosses
    },
    home_team: {
      abbreviation: homeTeamAbbreviation,
      last_name: homeTeamLastName,
      season_wins: homeTeamRecordWins,
      season_losses: homeTeamRecordLosses
    },
    away_period_scores,
    home_period_scores,
    away_errors,
    home_errors,
    away_batter_totals: { runs: awayTeamRuns, hits: awayTeamHits },
    home_batter_totals: { runs: homeTeamRuns, hits: homeTeamHits },
    event_information: { status, start_date_time }
  } = JSON.parse(mlbData);
  return {
    awayTeamAbbreviation,
    homeTeamAbbreviation,
    awayTeamLastName,
    homeTeamLastName,
    awayPeriodScores: fillInScores(away_period_scores, 9, status),
    homePeriodScores: fillInScores(home_period_scores, 9, status),
    additionalInfo: {
      headers: ["R", "H", "E"],
      away: [awayTeamRuns, awayTeamHits, away_errors],
      home: [homeTeamRuns, homeTeamHits, home_errors]
    },
    status: getStatusText(status, start_date_time),
    teamRecords: {
      homeRecord: {
        wins: homeTeamRecordWins,
        losses: homeTeamRecordLosses
      },
      awayRecord: {
        wins: awayTeamRecordWins,
        losses: awayTeamRecordLosses
      }
    },
    periods: 9
  };
};
