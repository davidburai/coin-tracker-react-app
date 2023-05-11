import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { TagComponent } from '../../tag/Tag';

const CoinWrapper = styled.tr`
    border-bottom: 1px solid #dadada;
`;

const CoinTitleCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: .5rem;
    padding: .5rem;
    gap: .5rem;
`;

const CoinIcon = styled.img`
    width: 32px;
    height: 32px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &, &:visited, &:focus {
        color: #0066b2;
    }
`;

/**
 * @typedef CoinApiResponse
 * 
 * @type {object}
 * @property {string}   id - The uniqure identifier of the coin
 * @property {string}   image - The URI of the image of the coin
 * @property {string}   name - Title of the coin
 * @property {string}   symbol - Short version of the coin
 * @property {number}   current_price - The current price of the coin
 * @property {number}   high_24h - Highest price in the last 24 hour
 * @property {number}   low_24h - Lowest price in the last 24 hour
 */

/**
 * Component for showing the metadata of a single coin
 * 
 * @param {{ coin: CoinApiResponse, orderNumber: number }} props - Props object of the component
 */
export const Coin = ({ coin, orderNumber }) => {
    const { id, image, name, symbol, current_price: currentPrice, high_24h: high, low_24h: low } = coin;

    return (
        <CoinWrapper>
            <td>{orderNumber}</td>
            <CoinTitleCell>
                <CoinIcon src={image}></CoinIcon>
                <StyledLink to={`coin/${id}`}>
                    <span>{name}</span>
                </StyledLink>
                <TagComponent title={symbol} />
            </CoinTitleCell>
            <td>
                <span>
                    <span>&euro;</span>
                    <span>{currentPrice}</span>
                </span>
            </td>
            <td>
                <span>
                    <span>&euro;</span>
                    <span>{high}</span>
                </span>
            </td>
            <td>
                <span>
                    <span>&euro;</span>
                    <span>{low}</span>
                </span>
            </td>
        </CoinWrapper>
    )
}