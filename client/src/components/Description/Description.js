import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Description() {
    return(
        <Card className='mx-auto mt-5 text-center' bg='dark' text='light' style={{ width: '850px', height: '400px' }}>
            <Card.Header as="h1">Welcome to World War II Tank Finder!</Card.Header>
            <Card.Body>
                <Card.Text as='h3'>
                    World War II Tank Finder is a website designed to search for tanks of WW2 and display the details of said tanks! Currently only a handfull of tanks are documented, but more will be implemented soon!
                </Card.Text>
                <br></br>
                <Button className='ml-2' size="lg" variant="outline-light">Search For Tanks</Button>
            </Card.Body>
        </Card>
    )
}

export default Description;