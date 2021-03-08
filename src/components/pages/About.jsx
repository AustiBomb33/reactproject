import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../shared/Header';

const About = () => {
    return (
        <Fragment>
            <Header title="About" />
            <Container>
                <h2>
                    What is my site?
            </h2>
                <p>
                    this site is my React project for COMP2068. It gets a set of mock data from MockAPI.io, and allows you to filter and sort the results.
                <br />
                The site is formatted using React-Bootstrap
            </p>
            </Container>
        </Fragment>
    );
}

export default About;