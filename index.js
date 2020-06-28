const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const scoreCard = (games, supportTeam) => {
  const ul = document.createElement("ul");
  const body = document.querySelector("body");

  for (let game of games) {
    const li = document.createElement("li");
    li.innerHTML = getScoreLine(game);
    const myChamp = isWinner(game, supportTeam);
    li.classList.add(myChamp.isWinner === true ? "win" : "loss");
    ul.appendChild(li);
  }
  body.appendChild(ul);
};

const isWinner = ({ homeTeam, awayTeam }, supportTeam) => {
  const warriors = homeTeam.team === supportTeam ? homeTeam : awayTeam;
  return warriors;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeams, points: hPoints } = homeTeam;
  const { team: aTeams, points: aPoints } = awayTeam;
  let teamNames;
  let teamScores = "";
  if (aPoints > hPoints) {
    teamScores = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    teamScores = `${aPoints}-${hPoints}`;
  }
  teamNames = `${aTeams} vs ${hTeams}`;
  console.log(`${teamNames} ${teamScores}`);
  return `${teamNames} ${teamScores}`;
};

scoreCard(warriorsGames, "Golden State");
scoreCard(warriorsGames, "Houston");
