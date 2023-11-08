const randomFirstName = require('random-firstname');
let { totalJackpot } = require('./utils');
const { TICKET_PRICE } = require('./utils');
// Sample ticket: { name: 'John', numbers: [ 1, 2, 3] }
const tickets = [];

// Function to generate random 3 numbers in range 1-50 for each ticket
// TODO: Prompt user to choose 3 numbers ?
const generateTicketNumbers = () => {
  const ticketNumbers = [];

  while (ticketNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;

    // Check if the generated number is not already in the array
    if (!ticketNumbers.includes(randomNumber)) {
      ticketNumbers.push(randomNumber);
    }
  }

  return ticketNumbers;
};

// Function to buy a lottery ticket
const buyTicket = (name) => {
  const ticket = { name, numbers: generateTicketNumbers() };
  tickets.push(ticket);
  totalJackpot += TICKET_PRICE;

  return { ticket, totalJackpot };
};

// Function to display ticket information
const getTicketInformation = (ticket) => {
  console.log(
    `Ticket purchased for [${
      ticket.name
    }]. Your ticket numbers are [${ticket.numbers.join(', ')}].`,
  );
};

// Function to prepare a pool of tickets to draw winners from
const prepareTicketsPool = (count = 50) => {
  while (tickets.length < count) {
    buyTicket(randomFirstName());
  }

  console.log(
    `Generated a pool of 50 tickets to draw, with total jackpot [€ ${totalJackpot}]`,
  );
  return { ticketsPool: tickets, totalJackpot };
};

module.exports = {
  buyTicket,
  tickets,
  generateTicketNumbers,
  prepareTicketsPool,
  getTicketInformation,
};
