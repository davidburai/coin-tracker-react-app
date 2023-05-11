import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { CoinList } from './CoinList';
import { API_BASE_URL } from '../../constants';

// Mock API response
const mockCoinList = [
    {
        id: '1',
        image: '',
        name: 'Coin #1',
        symbol: 'c1',
        current_price: 1,
        high_24h: 1.1,
        low_24h: 0.9
    },
    {
        id: '2',
        image: '',
        name: 'Coin #2',
        symbol: 'c2',
        current_price: 10,
        high_24h: 10.1,
        low_24h: 9.9
    }
];

// Set up MSW server to capture outgoing requests
const server = setupServer(
    rest.get(`${API_BASE_URL}/coins/markets`, (req, res, ctx) => {
        return res(ctx.json(mockCoinList));
    })
);

const renderComponent = () => render(
    <MemoryRouter>
        <CoinList />
    </MemoryRouter>
);

describe('CoinList component', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('should render coin list correctly', async () => {
        const { findByText, queryByTestId } = renderComponent();

        const coinListItem = await findByText('Coin #1');
        const errorElement = queryByTestId('error-container');

        expect(coinListItem).toBeVisible();
        // Error should not be displayed
        expect(errorElement).toBeNull();
    });

    it('should display error message if fetching fails', async () => {
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