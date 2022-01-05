

import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

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
          <Routes>
              <Route path='/' element={<Header />} >
                <Route index element={<Index/>} />

                <Route path='users' element={<Users />} />
                <Route path='news' element={<News />} />
                
                <Route path='books' element={<Books />}>
                  <Route index element={
                    <div>
                      <h1>Please select one.</h1>
                    </div>
                  }/>

                  <Route path=':id' element={<Book />} />
                </Route>

                <Route path="*" element={
                    <div style={{ padding: "1rem" }}>
                      <h1>404 Not Found.</h1>
                    </div>
                  }
                />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
