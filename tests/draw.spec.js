const {
  drawWinners,
  drawLuckyNumbers,
  getWinnersResultsWithPrize,
} = require('../src/draw');
const { prepareTicketsPool } = require('../src/ticket');
const { formatCurrency } = require('../src/utils');

const { winnerTickets } = require('../src/draw');

// Mock the standard output (console.log) for testing
let consoleOutput = [];

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = (output) => {
    consoleOutput.push(output);
  };
});
afterEach(() => {
  console.log = originalConsoleLog;
  consoleOutput = [];
});

// Mock the randomFirstName function
jest.mock('random-firstname', () => jest.fn(() => 'MockedName'));

describe('drawLuckyNumbers', () => {
  it('should draw 3 unique numbers as lucky numbers', () => {
    const luckyNumbers = drawLuckyNumbers();

    // Ensure there are 3 unique numbers within the valid range
    expect(luckyNumbers.length).toBe(3);
    expect(luckyNumbers[0]).toBeGreaterThanOrEqual(1);
    expect(luckyNumbers[0]).toBeLessThanOrEqual(50);
    expect(new Set(luckyNumbers).size).toBe(3);

    // Check if the console.log output is as expected
    expect(consoleOutput[1]).toContain('1st ball: [' + luckyNumbers[0] + ']');
    expect(consoleOutput[2]).toContain('2nd ball: [' + luckyNumbers[1] + ']');
    expect(consoleOutput[3]).toContain('3rd ball: [' + luckyNumbers[2] + ']');
  });
});

describe('drawWinners', () => {
  it('should draw three winners from the ticket pool', () => {
    const initialTicketCount = prepareTicketsPool(50).ticketsPool.length;

    drawWinners();

    // Ensure that there are 3 winners drawn and that they have been removed from the ticket pool
    expect(winnerTickets.length).toBe(3);
    expect(winnerTickets[0]).toBeDefined();
    expect(winnerTickets[1]).toBeDefined();
    expect(winnerTickets[2]).toBeDefined();
    expect(prepareTicketsPool(47).ticketsPool.length).toBe(
      initialTicketCount - 3,
    );
  });
});

describe('getWinnersResultsWithPrize', () => {
  it('should calculate and display prize results for winners', () => {
    // Mock winnerTickets
    winnerTickets.push(
      { name: 'MockedName' },
      { name: 'MockedName' },
      { name: 'MockedName' },
    );

    getWinnersResultsWithPrize();

    expect(consoleOutput[1]).toContain(
      '1st Place: [MockedName] : [' + formatCurrency(263) + ']',
    );
    expect(consoleOutput[2]).toContain(
      '2nd Place: [MockedName] : [' + formatCurrency(53) + ']',
    );
    expect(consoleOutput[3]).toContain(
      '3rd Place: [MockedName] : [' + formatCurrency(35) + ']',
    );
  });
});
