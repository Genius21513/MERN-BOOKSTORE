import * as React from 'react';
import { Row, ListGroup } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import { getBooks } from '../../data/books';

export default function Books (props){
    let books = getBooks();

    return (
        <div className='books'>
            <h1> Books List </h1>
            <div className='mt-3'>
                <ListGroup>
                    {
                        books.map( book => (
                            <ListGroup.Item key={book.number}>
                                <Link
                                to={`/books/${book.number}`}
                                key={book.number}>
                                    {book.name}
                                </Link>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        </div>
    );
}