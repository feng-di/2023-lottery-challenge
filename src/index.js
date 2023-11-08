const { Command } = require('commander');
const {
  drawWinners,
  drawLuckyNumbers,
  getWinnersResultsWithPrize,
} = require('./draw');
const { buyTicket } = require('./ticket');

const program = new Command();
program.version('1.0.0').description('CodeCraft Challenge Lottery System');

program
  .command('buy [name]')
  .description('Buy a lottery ticket with first name')
  .action((name) => {
    buyTicket(name);
  });

program
  .command('draw')
  .description('Trigger the lottery draw')
  .action(() => {
    drawLuckyNumbers();
    drawWinners();
  });

program
  .command('winners')
  .description('Display the winners and prize distribution in euros')
  .action(async () => {
    drawLuckyNumbers();
    await drawWinners();
    getWinnersResultsWithPrize();
  });

program.parse(process.argv);
