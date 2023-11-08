let { totalJackpot, TICKET_PRICE } = require("./utils");
let randomFirstName = require("random-firstname");
// Sample ticket: { name: 'John', numbers: [ 1, 2, 3] }
const tickets = [];

// Function to generate random 3 numbers in range 1-50 for each ticket
//TODO: Prompt user to choose 3 numbers ?
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
  const ticketNumbers = generateTicketNumbers();
  tickets.push({ name, ticketNumbers });
  totalJackpot += TICKET_PRICE;
  console.log(
    `Ticket purchased for [${name}]. Your ticket numbers are [${ticketNumbers.join(
      ", ",
    )}].`,
  );

  return totalJackpot;
};

// Function to prepare a pool of tickets to draw winners from
const prepareTicketsPool = (count = 50) => {
  while (tickets.length < count) {
    buyTicket(randomFirstName());
  }

  return { ticketsPool: tickets, totalJackpot };
};

module.exports = {
  buyTicket,
  tickets,
  generateTicketNumbers,
  prepareTicketsPool,
};
