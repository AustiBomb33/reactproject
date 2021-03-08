import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'react-bootstrap';
const Header = ({ title = "No Title Set" }) => {
    return (
        <header>
            <Jumbotron class="jumbotron-short">
                <Container>
                    <h1>{title}</h1>
                </Container>
            </Jumbotron>
        </header>
    );
}

export default Header;