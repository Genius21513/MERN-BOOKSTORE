import * as React from 'react';

import { useParams } from 'react-router-dom';

import { getBook } from '../../data/books';
import BookForm from './bookform';

export default function Book (props){
    let params = useParams();
    let book = getBook(parseInt(params.id, 10));

    return (
        <div>
            {
                params.id == 'create'?
                <BookForm /> : <BookForm book={book}/>
            }
        </div>
    );
}