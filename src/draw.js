const { prepareTicketsPool } = require("./ticket");
const { formatCurrency } = require("./utils");
let finalJackpot = require("./utils").totalJackpot

// Same structure as tickets, but with 3 winners
const winnerTickets = [];

// Function to select 3 unique numbers in range as lucky numbers
const drawLuckyNumbers = (min = 1, max = 50) => {
  if (max - min + 1 < 3) {
    throw new Error("Range is too small to select 3 unique numbers.");
  }

  const luckNumbers = [];
  while (luckNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!luckNumbers.includes(randomNumber)) {
      luckNumbers.push(randomNumber);
    }
  }

  console.log('CodeCraft Challenge Results\n');
  console.log(`1st ball: [${luckNumbers[0]}]`);
  console.log(`2nd ball: [${luckNumbers[1]}]`);
  console.log(`3rd ball: [${luckNumbers[2]}]`);

  return luckNumbers;
};

// Function to draw three winners and calculate prizes
const drawWinners = async () => {
  //TODO: Tickets randomly generated, not purchased, to be replaced in real scenario
  const { ticketsPool, totalJackpot} = prepareTicketsPool(50);
  finalJackpot = totalJackpot;

  if (ticketsPool.length < 3) {
    console.log("Not enough tickets for a draw.");
    return;
  }

  while (winnerTickets.length < 3) {
    const randomIndex = Math.floor(Math.random() * ticketsPool.length);
    winnerTickets.push(ticketsPool.splice(randomIndex, 1)[0]);
  }
};

const getWinnersResultsWithPrize = () => {
  if (winnerTickets.length < 3) {
    throw new Error("Winner should be drawed before calculating prize");
  }

  // Calculate prizes
  const firstPrize = Math.round((finalJackpot / 2) * 0.75);
  const secondPrize = Math.round((finalJackpot / 2) * 0.15);
  const thirdPrize = Math.round((finalJackpot / 2) * 0.1);

  console.log("\nWinners:\n");
  console.log(`1st Place: [${winnerTickets[0].name}] : [${formatCurrency(firstPrize)}]`);
  console.log(`2nd Place: [${winnerTickets[1].name}] : [${formatCurrency(secondPrize)}]`);
  console.log(`3rd Place: [${winnerTickets[2].name}] : [${formatCurrency(thirdPrize)}]`);
}

module.exports = { drawWinners, winnerTickets, drawLuckyNumbers, getWinnersResultsWithPrize };
