import * as React from 'react';

import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { getBook, saveBook, updateBook } from '../../data/books';

export default function Book (props){
    let params = useParams();
    let book = (params.id!=='create')? getBook(parseInt(params.id, 10)) : null;
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        book? updateBook(book.id, data) : saveBook(data);

    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>{book? `Edit a Book - ${book.name}` : `Please Create a Book.`}</h1>
                <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='input name' defaultValue={book?book.name:``} {...register("name")} />
                    <Form.Text>Please input name</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type='text' placeholder='input number' disabled={book? true:false} defaultValue={book?book.id:``} {...register("id")} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='text' placeholder='input price' defaultValue={book?book.price:``} {...register("price")} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Pub Date</Form.Label>
                    <Form.Control type='date' placeholder='input date' defaultValue={book?book.pubdate:``} {...register("pubdate")} />
                </Form.Group>
                <Button variant='primary' type='submit'>{book===false?`Create`:`Save`}</Button>
            </Form>
        </React.Fragment>
    );
}