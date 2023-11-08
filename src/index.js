const { Command } = require('commander');
const {
  drawWinners,
  drawLuckyNumbers,
  getWinnersResultsWithPrize,
} = require('./draw');
const { buyTicket, getTicketInformation } = require('./ticket');

const program = new Command();
program.version('1.0.0').description('CodeCraft Challenge Lottery System');

program
  .command('buy [name]')
  .description('Buy a lottery ticket with first name')
  .action((name) => {
    const { ticket } = buyTicket(name);
    getTicketInformation(ticket);
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
  .action(() => {
    drawLuckyNumbers();
    drawWinners();
    getWinnersResultsWithPrize();
  });

program.parse(process.argv);
