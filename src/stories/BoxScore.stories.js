import React from 'react';
import BoxScore from '../BoxScore';

const mockProps = {
  awayTeamAbbreviation: 'SEA',
  homeTeamAbbreviation: 'LAA',
  awayTeamLastName: 'Mariners',
  homeTeamLastName: 'Angels',
  awayPeriodScores: [0, 0, 2, 1, 0, 0, 0, 0, 0],
  homePeriodScores: [0, 2, 0, 0, 0, 0, 1, 0, 1],
  additionalInfo: {
    headers: ["R", "H", "E"],
    away: [3, 5, 1],
    home: [4, 10, 0]
  },
  status: 'Btm 9th',
  teamRecords: {
    homeRecord: {
      wins: 55,
      losses: 22
    },
    awayRecord: {
      wins: 54,
      losses: 23
    }
  },
  periods: 9
};

const upComingProps = {
  ...mockProps,
  additionalInfo: {
    headers: ["R", "H", "E"],
    away: ['', '', ''],
    home: ['', '', '']
  },
  awayPeriodScores: ['', '', '', '', '', '', '', '', ''],
  homePeriodScores: ['', '', '', '', '', '', '', '', ''],
  status: "09/26, 1:05pm",
}

const completedProps = {
  ...mockProps,
  status: 'Final',
}

const extraInningsProps = {
  ...mockProps,
  awayPeriodScores: [0, 0, 2, 1, 0, 0, 0, 0, 0, 2],
  homePeriodScores: [0, 2, 0, 0, 0, 0, 1, 0, 1, ''],
}

const nbaProps = {
  awayTeamAbbreviation: 'NYK',
  homeTeamAbbreviation: 'LAC',
  awayTeamLastName: 'Knicks',
  homeTeamLastName: 'Clippers',
  awayPeriodScores: [24, 25, 30, 28],
  homePeriodScores: [15, 23, 44, 22],
  additionalInfo: {
    headers: [],
    away: [],
    home: []
  },
  status: 'Final',
  teamRecords: {
    homeRecord: {
      wins: 55,
      losses: 22
    },
    awayRecord: {
      wins: 54,
      losses: 23
    }
  },
  periods: 4
};

const Template = (args) => <BoxScore {...args} />;

export const InProgress = Template.bind({});

InProgress.args = {
  data: {
    ...mockProps,
  }
};

export const Upcoming = Template.bind({});

Upcoming.args = {
  primary: false,
  label: 'BoxScore/ upComing',
  data: {
    ...upComingProps,
  }
};

export const Completed = Template.bind({});

Completed.args = {
  primary: false,
  label: 'BoxScore/ completed game',
  data: {
    ...completedProps,
  }
};

export const ExtraInnings = Template.bind({});

ExtraInnings.args = {
  primary: false,
  label: 'BoxScore/ extra innings',
  data: {
    ...extraInningsProps,
  }
};

export const NbaFormat = Template.bind({});

NbaFormat.args = {
  primary: false,
  label: 'BoxScore/ NBA',
  data: {
    ...nbaProps,
  }
};


export default {
  title: 'Example/BoxScore',
  component: BoxScore,
};
