let { formatCurrency, TICKET_PRICE, totalJackpot } = require('../src/utils');

describe('formatCurrency', () => {
  it('should format a number as currency', () => {
    const formattedCurrency = formatCurrency(1000);
    expect(formattedCurrency).toBe('€ 1,000');
  });

  it('should handle negative numbers', () => {
    const formattedCurrency = formatCurrency(-5000);
    expect(formattedCurrency).toBe('€ -5,000');
  });
});

describe('TICKET_PRICE', () => {
  it('should have a value of 10', () => {
    expect(TICKET_PRICE).toBe(10);
  });
});

describe('totalJackpot', () => {
  it('should initially have a value of 200', () => {
    expect(totalJackpot).toBe(200);
  });

  it('should update totalJackpot value', () => {
    totalJackpot += 100;
    expect(totalJackpot).toBe(300);
  });
});
