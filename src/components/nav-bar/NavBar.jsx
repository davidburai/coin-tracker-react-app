import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavBarWrapper = styled.nav`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
`;

const NavBarElement = styled.li`
    list-style-type: none;
`;

const NavBarElementLink = styled(Link)`
    display: inline-block;
    border: 1px solid #dadada;
    border-radius: .75rem;
    text-decoration: none;
    padding: .5rem .75rem;
    &:visited {
        color: initial;
    }
`;

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <ul>
                <NavBarElement>
                    <NavBarElementLink to='/'><h4>Back to Home</h4></NavBarElementLink>
                </NavBarElement>
            </ul>
        </NavBarWrapper>
    );
}
