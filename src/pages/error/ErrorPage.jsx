import { useRouteError } from 'react-router-dom';
import { styled } from 'styled-components';
import { NavBar } from '../../components/nav-bar/NavBar';

const ErrorPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 4rem;
`;

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <ErrorPageWrapper>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </ErrorPageWrapper>
        </>
    );
};
