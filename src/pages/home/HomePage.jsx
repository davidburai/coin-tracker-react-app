import { styled } from 'styled-components';
import { CoinList } from '../../components/coin-list/CoinList';

const HomeContainer = styled.div`
    text-align: center;
`;

const Heading = styled.h1`
    padding: 2rem;
`;

const HomePage = () => {
    return (
        <HomeContainer>
            <Heading>Coins tracking app</Heading>
            <CoinList />
        </HomeContainer>
    );
};

export default HomePage;
