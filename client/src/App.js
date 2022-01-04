

import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header';
import Index from './components/index';
import Users from './components/users/users';
import News from './components/news/news';
import Books from './components/books/books';
import Book from './components/books/book';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className='main'>
          <Routes>
            <Route path='/' element={<Index />} />
              <Route path='users' element={<Users />} />
              <Route path='news' element={<News />} />
              <Route path='books' element={<Books />} />
              <Route path='books/:id' element={<Book />} />
              
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <h1>404 Not Found.</h1>
                  </main>
                }
              />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
