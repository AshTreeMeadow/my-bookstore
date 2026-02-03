import { useState } from 'react'
import './App.css'

const BOOKS = [
  { id: 1, title: "Operating Systems Concepts", price: 45, category: "CSE Core" },
  { id: 2, title: "The C++ Programming Language", price: 55, category: "Languages" },
  { id: 3, title: "React for Beginners", price: 30, category: "Web Dev" },
  { id: 4, title: "Blockchain & Veritas Ledgers", price: 50, category: "Advanced" },
  { id: 5, title: "Game Dev with Godot", price: 40, category: "Gaming" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // Logic to filter books based on search input
  const filteredBooks = BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shop-container">
      <nav className="navbar">
        <h1>DevBooks Store</h1>
        <div className="cart-status">
          🛒 Cart: {cart.length} | Total: ${totalPrice}
        </div>
      </nav>

      {/* NEW: Search Input */}
      <div className="search-section">
        <input 
          type="text" 
          placeholder="Search by book title..." 
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <main className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <span className="badge">{book.category}</span>
            <h3>{book.title}</h3>
            <p className="price">${book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </main>

      {filteredBooks.length === 0 && (
        <p className="no-results">No books found matching "{searchTerm}"</p>
      )}
    </div>
  );
}