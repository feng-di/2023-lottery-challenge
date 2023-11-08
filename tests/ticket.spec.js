const {
  buyTicket,
  tickets,
  generateTicketNumbers,
  prepareTicketsPool,
} = require('../src/ticket');

const { TICKET_PRICE, totalJackpot } = require('../src/utils');

describe('buyTicket', () => {
  it('should buy a lottery ticket and update totalJackpot', () => {
    const initialTotalJackpot = totalJackpot;
    const name = 'Alice';

    const updatedTotalJackpot = buyTicket(name);

    // Ensure a new ticket is added and totalJackpot is updated
    expect(tickets.length).toBe(1);
    expect(updatedTotalJackpot).toBe(initialTotalJackpot + TICKET_PRICE);
  });
});

describe('generateTicketNumbers', () => {
  it('should generate 3 unique ticket numbers', () => {
    const ticketNumbers = generateTicketNumbers();

    // Ensure there are 3 unique numbers within the valid range
    expect(ticketNumbers.length).toBe(3);
    expect(ticketNumbers[0]).toBeGreaterThanOrEqual(1);
    expect(ticketNumbers[0]).toBeLessThanOrEqual(50);
    expect(new Set(ticketNumbers).size).toBe(3);
  });
});

describe('prepareTicketsPool', () => {
  it('should prepare a pool of tickets with the specified count', () => {
    const initialTotalJackpot = totalJackpot;
    const count = 50;

    const result = prepareTicketsPool(count);

    // Ensure the tickets pool is prepared and totalJackpot is updated
    expect(result.ticketsPool.length).toBe(count);
    expect(result.totalJackpot).toBe(
      initialTotalJackpot + count * TICKET_PRICE,
    );
  });
});
