// Shop.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import '../../Assets/Style/Shop.css';
import { FaSearch } from 'react-icons/fa';

const Shop = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=20');
        const data = await response.json();
        setProducts(data.products);
        setOriginalProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = originalProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setProducts(originalProducts);
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ecom-container">
      <header className="ecom-header">
        <div className="header-logo" onClick={() => navigate('/shop')}>
          <h1 className="logo-text">ecom.in</h1>
        </div>
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button"><FaSearch /></button>
          {searchQuery && (
            <button type="button" onClick={clearSearch} className="clear-button">
              Clear
            </button>
          )}
        </form>
        <div className="header-nav">
          <button className="cart-button" onClick={goToCart}>
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
          <button onClick={handleLogout} className="logout-btn">Sign Out</button>
        </div>
      </header>

      <main className="ecom-main">
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <>
            <div className="product-grid">
              {currentProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.title} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-rating">
                      {'★'.repeat(Math.round(product.rating))} ({product.rating})
                    </p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                <button key={i + 1} onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Shop;