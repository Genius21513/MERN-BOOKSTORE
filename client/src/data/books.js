let books = [
    {
        name: "Santa Monica",
        id: 1995,
        price: "$10,800",
        pubdate: "12/05/1995"
    },
    {
        name: "Stankonia",
        id: 2000,
        price: "$8,000",
        pubdate: "10/31/2000"
    },
    {
        name: "Ocean Avenue",
        id: 2003,
        price: "$9,500",
        pubdate: "07/22/2003"
    },
    {
        name: "Tubthumper",
        id: 1997,
        price: "$14,000",
        pubdate: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        id: 1998,
        price: "$4,600",
        pubdate: "01/27/2998"
    }
];

export function getBooks () {
    return books;
}

export function getBook (id) {
    return books.find (book => book.id === id);
}

export function updateBook (id, s_book) {
    books.map( book => {
        return (book.id === id) ? s_book : book;
    });
}

export function saveBook (book) {
    books.push(book); 
}