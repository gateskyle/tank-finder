import React from 'react';
import { Form, FormControl, Button, Navbar, Container, Row, Col } from 'react-bootstrap';

function SearchBar() {
    return (
        <Container fluid>
            <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
                <Col>
                    <h4>To start, use the search bar below.</h4>
                    <Navbar className="justify-content-center" bg="dark" expand="dark">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;