import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage component', () => {
    it('renders heading correctly', () => {
        render(<HomePage />);

        expect(screen.getByRole('heading')).toHaveTextContent('Coins tracking app');
    });
});