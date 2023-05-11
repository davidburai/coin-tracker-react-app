import { COIN_LIST_API_URL } from '../../constants';
import { Coin as CoinComponent } from './ui/Coin';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const CoinListWrapper = styled.table`
    margin: 0 auto;
    padding: 1rem;
    border-radius: .75rem;
    border-collapse: collapse;
`;

const TableHeadRow = styled.tr`
    &:not(&:last-child) {
        border-bottom: 1px solid #dadada;
    }
    padding: .5rem;
`;

const TableHeadCell = styled.th`
    padding: .5rem 1rem;
`;

const ErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CoinList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [coinList, setCoinList] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${COIN_LIST_API_URL}`);
                const data = await response.json();
                setIsLoading(false);
                setCoinList(data);
            } catch (e) {
                setError(e.message);
            }
        })();
    }, []);

    if (error) return (
        <ErrorWrapper data-testid='error-container'>
            <p>Oops, something went wrong...</p>
            <p>{error}</p>
        </ErrorWrapper>
    )

    if (isLoading) return <p>Loading coins...</p>

    return (
        <CoinListWrapper>
            <thead>
                <TableHeadRow>
                    <TableHeadCell>#</TableHeadCell>
                    <TableHeadCell>Coin</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Highest price (24h)</TableHeadCell>
                    <TableHeadCell>Lowest price (24h)</TableHeadCell>
                </TableHeadRow>
            </thead>
            <tbody>
                {coinList?.map((coin, index) => <CoinComponent key={coin.id} coin={coin} orderNumber={index + 1} />)}
            </tbody>
        </CoinListWrapper>
    );
};
