import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import { getBooks } from '../../data/books';
import QLink from '../qlink';

export default function Books (props){
    let books = getBooks();

    return (
        <div className='row'>
            <div className='books col-md-3'>
                <h1> Books List </h1>
                <div className='mt-3'>
                    <ListGroup>
                        {
                            books.map( book => (
                                <ListGroup.Item key={book.id}>
                                    <QLink
                                    to={`/books/${book.id}`}
                                    key={book.id}>
                                        {book.name}
                                    </QLink>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </div>
            </div>

            <div className='book-form col-md-9'>
                <Outlet/>
            </div>
        </div>
    );
}