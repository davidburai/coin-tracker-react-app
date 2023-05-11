import { getMappedCoin } from "./get-mapped-coin";

// Mock API response
const mockCoin = {
    name: 'Coin #1',
    image: '',
    symbol: 'c1',
    hashing_algorithm: 'SHA-256',
    description: { en: 'Short description' },
    market_data: { market_cap: { eur: 10000000000000 } },
    links: { homepage: ['www.example.com'] },
    genesis_date: '2000-01-01'
};

const mappedCoinResult = {
    name: 'Coin #1',
    image: '',
    symbol: 'c1',
    hashAlgorithm: 'SHA-256',
    description: 'Short description',
    marketCap: 10000000000000,
    homePageLinks: ['www.example.com'],
    genesisDate: '2000-01-01'
}

describe('getMappedCoin util function', () => {
    it('should return the API response object in a correct mapped format', () => {
        const mappedCoin = getMappedCoin(mockCoin);

        expect(mappedCoin).toEqual(mappedCoinResult);
    });
});