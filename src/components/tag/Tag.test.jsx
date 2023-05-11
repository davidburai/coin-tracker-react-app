import { render } from '@testing-library/react';

import { TagComponent } from './Tag';

describe('Tag component', () => {
    it('renders component correctly', () => {
        const mockTitle = 'Tag';
        const { getByTestId } = render(<TagComponent title={mockTitle} />);

        expect(getByTestId('tag-container')).toBeVisible();
    });

    it('renders title correctly in container', () => {
        const mockTitle = 'Tag';
        const { getByText } = render(<TagComponent title={mockTitle} />);

        expect(getByText(mockTitle)).toBeInTheDocument();
    });
});