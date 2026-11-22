import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHotel } from "../redux/hotelSlice";
import { Helmet } from "react-helmet-async";
import "../App.css";

function HotelList() {
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [activeQuickFilter, setActiveQuickFilter] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const hotelsPerPage = 4;

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch = hotel.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesMin =
      minPrice === "" || hotel.price >= Number(minPrice);

    const matchesMax =
      maxPrice === "" || hotel.price <= Number(maxPrice);

    return matchesSearch && matchesMin && matchesMax;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === "low-to-high") {
      return Number(a.price) - Number(b.price);
    }
    if (sortBy === "high-to-low") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });

  const totalPages = Math.ceil(
    sortedHotels.length / hotelsPerPage
  );

  const startIndex = (currentPage - 1) * hotelsPerPage;

  const currentHotels = sortedHotels.slice(
    startIndex,
    startIndex + hotelsPerPage
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel?"
    );

    if (confirmDelete) {
      dispatch(deleteHotel(id));
      alert("Hotel deleted successfully!");
    }
  };

  const handleQuickFilter = (key, min, max) => {
    if (activeQuickFilter === key) {
      setActiveQuickFilter("");
      setMinPrice("");
      setMaxPrice("");
    } else {
      setActiveQuickFilter(key);
      setMinPrice(min === 0 ? "0" : String(min));
      setMaxPrice(max !== "" ? String(max) : "");
    }
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setActiveQuickFilter("");
    setSortBy("default");
    setCurrentPage(1);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>Hotel Lists</title>
        <meta
          name="description"
          content="Explore hotels, compare prices, search stays, and find the perfect hotel for your trip."
        />
      </Helmet>

      {/* heading */}
      <header className="header">
        <h1>Hotel Lists</h1>
      </header>

      <div className="main-layout">
        {/* sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Filters</h2>
          </div>

          <form onSubmit={handleApplyFilters} className="sidebar-filter-form">
            <div className="filter-group">
              <label htmlFor="search-input" className="filter-label">
                SEARCH BY TITLE
              </label>
              <div className="input-with-icon">
                <span className="input-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  id="search-input"
                  type="text"
                  className="filter-input with-left-icon"
                  placeholder="e.g. Royal Heritage Inn.."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="filter-group">
              <label htmlFor="min-price-input" className="filter-label">
                MIN PRICE (₹)
              </label>
              <div className="input-with-icon">
                <span className="currency-prefix" aria-hidden="true">₹</span>
                <input
                  id="min-price-input"
                  type="number"
                  min="0"
                  className="filter-input with-left-prefix"
                  placeholder="Min 0"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                    setActiveQuickFilter("");
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="filter-group">
              <label htmlFor="max-price-input" className="filter-label">
                MAX PRICE (₹)
              </label>
              <div className="input-with-icon">
                <span className="currency-prefix" aria-hidden="true">₹</span>
                <input
                  id="max-price-input"
                  type="number"
                  min="0"
                  className="filter-input with-left-prefix"
                  placeholder="Max 25000"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                    setActiveQuickFilter("");
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="filter-actions-row">
              <button
                type="submit"
                className="apply-filters-btn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                <span>Apply Filters</span>
              </button>

              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
                title="Reset all filters"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                <span>Reset</span>
              </button>
            </div>
          </form>

          <hr className="filter-divider" />

          <div className="quick-filters-section">
            <span className="quick-filters-label">Quick Filters:</span>
            <div className="quick-filter-pills">
              <button
                type="button"
                className={`quick-pill ${
                  activeQuickFilter === "under3k" ? "active" : ""
                }`}
                onClick={() => handleQuickFilter("under3k", 0, 3000)}
              >
                Under ₹3,000
              </button>

              <button
                type="button"
                className={`quick-pill ${
                  activeQuickFilter === "3kto6k" ? "active" : ""
                }`}
                onClick={() => handleQuickFilter("3kto6k", 3000, 6000)}
              >
                ₹3,000 – ₹6,000
              </button>

              <button
                type="button"
                className={`quick-pill ${
                  activeQuickFilter === "6kplus" ? "active" : ""
                }`}
                onClick={() => handleQuickFilter("6kplus", 6000, "")}
              >
                ₹6,000+ Luxury
              </button>
            </div>
          </div>

          <hr className="filter-divider" />

          <div className="sort-section">
            <span className="filter-label">SORT BY PRICE</span>
            <div className="sort-btn-group">
              <button
                type="button"
                className={`sort-pill ${
                  sortBy === "low-to-high" ? "active" : ""
                }`}
                onClick={() => {
                  setSortBy(sortBy === "low-to-high" ? "default" : "low-to-high");
                  setCurrentPage(1);
                }}
              >
                <span>Price: Low to High</span>
                <span className="sort-arrow">₹ ↑</span>
              </button>

              <button
                type="button"
                className={`sort-pill ${
                  sortBy === "high-to-low" ? "active" : ""
                }`}
                onClick={() => {
                  setSortBy(sortBy === "high-to-low" ? "default" : "high-to-low");
                  setCurrentPage(1);
                }}
              >
                <span>Price: High to Low</span>
                <span className="sort-arrow">₹ ↓</span>
              </button>
            </div>
          </div>
        </aside>

        {/* hotelcards */}
        <main className="hotel-section">
          <div className="section-heading">
            <div>
              <h2>Available Hotels</h2>
              <p>
                {sortedHotels.length} {sortedHotels.length === 1 ? "hotel" : "hotels"} found
                {sortBy === "low-to-high" && " • Low to High"}
                {sortBy === "high-to-low" && " • High to Low"}
              </p>
            </div>

            <Link to="/add-hotel" className="add-button">
              + Add Hotel
            </Link>
          </div>

          {currentHotels.length === 0 ? (
            <h3 className="no-results">
              No hotels found!
            </h3>
          ) : (
            currentHotels.map((hotel) => (
              <div className="hotel-card" key={hotel.id}>
                <div className="hotel-image-wrap">
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="hotel-image"
                  />
                </div>

                <div className="hotel-info">
                  <h2>{hotel.title}</h2>
                  <p>{hotel.description}</p>
                  <h3>₹{Number(hotel.price).toLocaleString("en-IN")} / night</h3>
                </div>

                <div className="hotel-actions">
                  <Link
                    to={`/hotel/${hotel.id}`}
                    className="action-btn btn-view-details"
                  >
                    view details
                  </Link>

                  <Link
                    to={`/edit-hotel/${hotel.id}`}
                    className="action-btn btn-edit"
                  >
                    edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(hotel.id)}
                    className="action-btn btn-delete"
                  >
                    delete
                  </button>
                </div>
              </div>
            ))
          )}

          {/* pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>

      {/* footer */}
      <footer className="footer">
        <p>Task done by Swathini</p>
      </footer>
    </div>
  );
}

export default HotelList;
