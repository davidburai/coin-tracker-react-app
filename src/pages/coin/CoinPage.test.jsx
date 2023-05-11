import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { CoinPage } from './CoinPage';
import { COIN_API_BASE_URL } from '../../constants';

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

// Set up MSW server to capture outgoing requests
const server = setupServer(
    rest.get(`${COIN_API_BASE_URL}/1`, (req, res, ctx) => {
        return res(ctx.json(mockCoin));
    })
);

const renderComponent = () => render(
    <MemoryRouter>
        <CoinPage />
    </MemoryRouter>
);

describe('CoinPage component', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('should render coin page correctly', async () => {
        const { findByText } = renderComponent();

        const coinTitle = await findByText(mockCoin.name);
        expect(coinTitle).toBeVisible();
    });

    it.skip('should display error message if fetching fails', async () => {
        server.use(
            rest.get(`${API_BASE_URL}/coins/markets`, (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        const { findByTestId } = renderComponent();

        const errorContainer = await findByTestId('error-container');
        expect(errorContainer).toBeVisible();
    });
});