import React, { useState } from 'react';
import { Form, FormControl, Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';

function SearchBar() {

    const [searchState, setSearchState] = useState("")
    const [searchResults, setSearchResults] = useState([])

    function click() {
        console.log(searchState);
        API.findTank(searchState)
            .then((response) => {
                console.log(response.data[0].name);
                setSearchResults(response.data[0].name);
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    return (
        <Container fluid>
            <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
                <Col>
                    <h4>To start, use the search bar below.</h4>
                    <Navbar className="justify-content-center" bg="dark" expand="dark">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => setSearchState(event.target.value)} />
                            <Button variant="outline-light" onClick={click}>Search</Button>
                        </Form>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;