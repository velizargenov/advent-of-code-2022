import input from "./input";

const formattedInput = input.trim().split("\n");

const combinations = {
  "A Z, B X, C Y": 0,
  "A X, B Y, C Z": 3,
  "A Y, B Z, C X": 6
};

const myShapeScore = {
  x: 1,
  y: 2,
  z: 3
};

export const totalScore = () => {
  let totalScore = 0;
  formattedInput.map((game) => {
    return Object.entries(combinations).map((combination) => {
      if (combination[0].includes(game)) {
        const myMove = game.substr(game.length - 1).toLowerCase();
        totalScore += myShapeScore[myMove];
        return (totalScore += combination[1]);
      }
      return totalScore;
    });
  });
  return totalScore;
};

// 2_2
const map = {
  A: {
    shape: "rock",
    options: {
      draw: {
        shape: "rock",
        score: 1
      },
      loss: {
        shape: "paper",
        score: 3
      },
      win: {
        shape: "scissors",
        score: 2
      }
    }
  },
  B: {
    shape: "paper",
    options: {
      draw: {
        shape: "paper",
        score: 2
      },
      loss: {
        shape: "rock",
        score: 1
      },
      win: {
        shape: "scissors",
        score: 3
      }
    }
  },
  C: {
    shape: "scissors",
    options: {
      draw: {
        shape: "scissors",
        score: 3
      },
      loss: {
        shape: "paper",
        score: 2
      },
      win: {
        shape: "rock",
        score: 1
      }
    }
  }
};

const scoreComponents = {
  draw: 3,
  loss: 0,
  win: 6
};

const outcomeOptions = {
  X: "loss",
  Y: "draw",
  Z: "win"
};

export const ultraTopSecretStrategyGuideTotalScore = () => {
  let totalScore = 0;
  const chunkSize = 3;

  for (let i = 0; i < formattedInput.length; i += chunkSize) {
    const rounds = formattedInput.slice(i, i + chunkSize);
    rounds.map((round, index) => {
      const outcome = outcomeOptions[round[round.length - 1]];
      const myShapeScore = map[round[0]].options[outcome].score;
      const outcomeScore = scoreComponents[outcome];

      return (totalScore += outcomeScore + myShapeScore);
    });
  }
  console.log(
    `02_02: Ultra Top Secret Strategy Guide Total Score: ${totalScore}`
  );
};
