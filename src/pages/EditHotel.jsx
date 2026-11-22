import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateHotel } from "../redux/hotelSlice";
import HotelForm from "../components/HotelForm";
import { Helmet } from "react-helmet-async";
import "../App.css";

function EditHotel() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotel = useSelector((state) =>
    state.hotels.hotels.find((item) => Number(item.id) === Number(id))
  );

  const handleUpdateHotel = (hotelData) => {
    dispatch(
      updateHotel({
        ...hotelData,
        id: Number(id),
      })
    );

    alert("Hotel updated successfully!");
    navigate("/");
  };

  if (!hotel) {
    return (
      <div className="app-container">
        {/* heading */}
        <header className="header">
          <h1>Hotel Lists</h1>
        </header>

        {/* editpagestyle */}
        <div className="details-not-found">
          <h2>Hotel not found!</h2>
          <Link to="/" className="back-home-button">
            ← back to home
          </Link>
        </div>

        {/* footer */}
        <footer className="footer">
          <p>Task done by Swathini</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Helmet>
        <title>Edit Hotel | Hotel Lists</title>
        <meta
          name="description"
          content="Update hotel information, pricing, images, and location details."
        />
      </Helmet>

      {/* heading */}
      <header className="header">
        <h1>Hotel Lists</h1>
      </header>

      {/* editpagestyle */}
      <div className="form-page-wrapper">
        <div className="back-home-bar">
          <Link to="/" className="back-home-button">
            ← back to home
          </Link>
        </div>

        <h1 className="form-page-title">Edit Hotel</h1>

        <HotelForm
          initialData={hotel}
          onSubmit={handleUpdateHotel}
          buttonText="Update Hotel"
        />
      </div>

      {/* footer */}
      <footer className="footer">
        <p>Task done by Swathini</p>
      </footer>
    </div>
  );
}

export default EditHotel;
