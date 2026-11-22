import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addHotel } from "../redux/hotelSlice";
import HotelForm from "../components/HotelForm";
import { Helmet } from "react-helmet-async";
import "../App.css";

function AddHotel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddHotel = (hotelData) => {
    dispatch(addHotel(hotelData));
    alert("Hotel added successfully!");
    navigate("/");
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>Add Hotel | Hotel Lists</title>
        <meta
          name="description"
          content="Add a new hotel with its image, description, price, and location details."
        />
      </Helmet>

      {/* heading */}
      <header className="header">
        <h1>Hotel Lists</h1>
      </header>

      {/* addpagestyle */}
      <div className="form-page-wrapper">
        <div className="back-home-bar">
          <Link to="/" className="back-home-button">
            ← back to home
          </Link>
        </div>

        <h1 className="form-page-title">Add New Hotel</h1>

        <HotelForm onSubmit={handleAddHotel} buttonText="Add Hotel" />
      </div>

      {/* footer */}
      <footer className="footer">
        <p>Task done by Swathini</p>
      </footer>
    </div>
  );
}

export default AddHotel;
