import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { COIN_API_BASE_URL } from '../../constants';
import { styled } from 'styled-components';
import { NavBar } from '../../components/nav-bar/NavBar';
import { TagComponent } from '../../components/tag/Tag';
import { getMappedCoin } from './utils/get-mapped-coin';

const CoinPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    padding: 2rem 0;
`;

const CoinTitle = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

const CoinImage = styled.img`
    width: 32px;
    height: 32px;
`;

const Description = styled.li`
    padding: 1rem;
    background-color: #f1f1f1;
    border-radius: 1rem;
    margin: 1rem 0;
`;

const CoinMetadata = styled.ul`
    list-style-type: none;
`;

/**
 * A page component for displaying information about a certain coin
 */
export const CoinPage = () => {
    const { coinId } = useParams();
    const { isLoading, error, data: coinMetadata } = useFetch(`${COIN_API_BASE_URL}/${coinId}`);

    if (error) return 'An error has occurred: ' + error.message;
    if (isLoading) return <p>Loading coin...</p>;

    // Mapping API response to an easier usable object
    const {
        name,
        image,
        symbol,
        hashAlgorithm,
        marketCap,
        genesisDate,
        homePageLinks,
        description
    } = getMappedCoin(coinMetadata);
    // Fallback JSX Element if no metadata found
    const unknownElement = <i>Unknown</i>;

    return (
        <>
            <NavBar />
            <CoinPageWrapper>
                <div>
                    <div>
                        <CoinTitle>
                            <CoinImage src={image.small}></CoinImage>
                            <h2>{name}</h2>
                            <TagComponent title={symbol} />
                        </CoinTitle>
                    </div>
                    <div>
                        <CoinMetadata>
                            <Description dangerouslySetInnerHTML={{ __html: description || '<i>No description found</i>' }} />
                            <li>
                                Hashing algorithm: <span>{hashAlgorithm || unknownElement}</span>
                            </li>
                            <li>
                                Market cap: <span>{marketCap}</span>
                            </li>
                            <li>
                                Homepage:
                                {homePageLinks.map((link, index) => (
                                    <a key={index} href={link}>{link}</a>
                                ))}
                            </li>
                            <li>
                                Genesis date: <span>{genesisDate || unknownElement}</span>
                            </li>
                        </CoinMetadata>
                    </div>
                </div>
            </CoinPageWrapper>
        </>
    )
}