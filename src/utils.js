const TICKET_PRICE = 10;
let totalJackpot = 200;
const formatCurrency = (number) => `€ ${number.toLocaleString()}`;

// Lottery ticket module

module.exports = { formatCurrency, TICKET_PRICE, totalJackpot };
