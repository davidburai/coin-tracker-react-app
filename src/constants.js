const CURRENCY = 'eur';
const COINS_PER_PAGE = 10;
export const API_BASE_URL = 'https://api.coingecko.com/api/v3';
export const COIN_LIST_API_URL = `${API_BASE_URL}/coins/markets?vs_currency=${CURRENCY}&order=market_cap_desc&per_page=${COINS_PER_PAGE}`;
export const COIN_API_BASE_URL = `${API_BASE_URL}/coins`;