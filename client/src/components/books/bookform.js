import * as React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function BookForm (props) {
    const [book, setBook] = useState(props.book);
    
    return (
        <Form>
            <h1>{book? `Edit a Book - ${book.name}` : `Please Create a Book.`}</h1>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='input name' defaultValue={book?book.name:``} />
                <Form.Text>Please input name</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Number</Form.Label>
                <Form.Control type='text' placeholder='input number' defaultValue={book?book.number:``} />
                {/* <Form.Text>Please input number</Form.Text> */}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Price</Form.Label>
                <Form.Control type='text' placeholder='input price' defaultValue={book?book.price:``} />
                {/* <Form.Text>Please input price</Form.Text> */}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Pub Date</Form.Label>
                <Form.Control type='date' placeholder='input date' defaultValue={book?book.due:``} />
                {/* <Form.Text>Please input date</Form.Text> */}
            </Form.Group>
            <Button variant='primary' type='submit'>{book===false?`Create`:`Save`}</Button>
        </Form>
    );
}

export default BookForm;