import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch books');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author} {book.year && `(${book.year})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;
