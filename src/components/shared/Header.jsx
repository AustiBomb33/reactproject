import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
const Header = ({ title = "No Title Set" }) => {
    return (
        <header>
            <Jumbotron>
                <h1>{title}</h1>
            </Jumbotron>
        </header>
    );
}

export default Header;