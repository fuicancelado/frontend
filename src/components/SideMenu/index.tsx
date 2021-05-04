import { Container, Content } from './styles';
import { FaFireAlt, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const SideMenu = () => {
    return(
        <Container>
            <Content>
                <Link to="/" className="trendButton">
                    <FaFireAlt/>
                </Link>
                <Link to="/" className="searchButton">
                    <FaSearch/>
                </Link>
                <Link to="/" className="signOutButton">
                    <FaSignOutAlt/>
                </Link>
            </Content>
        </Container>
    )
}