import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Header title="Home" />
            <Container>
                <h2>Welcome to my website</h2>
                <p>This site is my React.JS Project for my COMP2068 class</p>
                <p>Click the About link, or <a href="/About">here</a>, to see more of what this is</p>
            </Container>
        </Fragment>
    )
}

export default Home;