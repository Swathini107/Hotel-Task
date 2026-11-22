import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet-async";
import { deleteHotel } from "../redux/hotelSlice";
import "../App.css";

function MapBoundsHandler({ userLocation, hotelPosition, routeCoords }) {
  const map = useMap();

  useEffect(() => {
    if (userLocation && hotelPosition) {
      if (routeCoords && routeCoords.length > 1) {
        const bounds = L.latLngBounds(routeCoords);
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      } else {
        const bounds = L.latLngBounds([userLocation, hotelPosition]);
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      }
    }
  }, [userLocation, hotelPosition, routeCoords, map]);

  return null;
}

function HotelDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotel = useSelector((state) =>
    state.hotels.hotels.find((item) => Number(item.id) === Number(id))
  );

  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const hotelMarkerIcon = L.divIcon({
    className: "custom-map-pin-container",
    html: `
      <div class="custom-map-pin hotel-pin" title="${hotel?.title || "Hotel"}">
        <span class="pin-symbol">🏨</span>
      </div>
    `,
    iconSize: [36, 42],
    iconAnchor: [18, 38],
    popupAnchor: [0, -36],
  });

  const userMarkerIcon = L.divIcon({
    className: "custom-map-pin-container",
    html: `
      <div class="custom-map-pin user-pin" title="Your Current Location">
        <span class="user-pulse-ring"></span>
        <span class="pin-symbol">📍</span>
      </div>
    `,
    iconSize: [36, 42],
    iconAnchor: [18, 38],
    popupAnchor: [0, -36],
  });

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  const handleCalculateDistance = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsCalculating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        const userPos = [userLat, userLon];
        setUserLocation(userPos);

        const hotelLat = Number(hotel.latitude);
        const hotelLon = Number(hotel.longitude);
        const hotelPos = [hotelLat, hotelLon];

        const dist = calculateDistance(hotelLat, hotelLon, userLat, userLon);
        setDistance(dist);

        try {
          const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${userLon},${userLat};${hotelLon},${hotelLat}?overview=full&geometries=geojson`;
          const res = await fetch(osrmUrl);
          const data = await res.json();
          if (data?.routes?.[0]?.geometry?.coordinates?.length) {
            const osrmCoords = data.routes[0].geometry.coordinates.map(
              ([lon, lat]) => [lat, lon]
            );
            setRouteCoordinates(osrmCoords);
          } else {
            setRouteCoordinates([userPos, hotelPos]);
          }
        } catch {
          setRouteCoordinates([userPos, hotelPos]);
        }

        setIsCalculating(false);
      },
      (error) => {
        setIsCalculating(false);
        console.error("Geolocation error:", error);
        alert(
          "Unable to access your location. Please ensure location permissions are enabled."
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${hotel.title}"?`
    );

    if (confirmDelete) {
      dispatch(deleteHotel(hotel.id));
      alert("Hotel deleted successfully!");
      navigate("/");
    }
  };

  if (!hotel) {
    return (
      <div className="app-container">
        {/* heading */}
        <header className="header">
          <h1>Hotel Lists</h1>
        </header>

        {/* viewpagestyle */}
        <div className="details-not-found">
          <h2>Hotel not found!</h2>
          <Link to="/" className="back-link">
            ← Back to Home Page
          </Link>
        </div>

        {/* footer */}
        <footer className="footer">
          <p>Task done by Swathini</p>
        </footer>
      </div>
    );
  }

  const hotelPosition = [Number(hotel.latitude), Number(hotel.longitude)];

  return (
    <div className="app-container">
      <Helmet>
        <title>{hotel.title} | Hotel Lists</title>
        <meta name="description" content={hotel.description} />
        <meta
          name="keywords"
          content={`${hotel.title}, hotel, hotel booking, accommodation`}
        />
      </Helmet>

      {/* heading */}
      <header className="header">
        <h1>Hotel Lists</h1>
      </header>

      {/* viewpagestyle */}
      <div className="details-page-wrapper">
        <div className="back-home-bar">
          <Link to="/" className="back-home-button">
            ← back to home
          </Link>
        </div>

        <div className="details-grid-layout">
          <div className="details-box image-box">
            <img
              src={hotel.image}
              alt={hotel.title}
              className="details-hotel-image"
            />
          </div>

          <div className="details-box info-box">
            <h1 className="hotel-detail-name">{hotel.title}</h1>
            <p className="hotel-detail-description">{hotel.description}</p>
            <h2 className="hotel-detail-price">
              ₹{Number(hotel.price).toLocaleString("en-IN")} / night
            </h2>

            <div className="detail-action-buttons">
              <Link
                to={`/edit-hotel/${hotel.id}`}
                className="btn-detail-edit"
              >
                edit
              </Link>
              <button
                type="button"
                onClick={handleDelete}
                className="btn-detail-delete"
              >
                delete
              </button>
            </div>
          </div>

          <div className="details-box location-box">
            <h3>Hotel Location Details</h3>

            <div className="coords-info">
              <p>
                <strong>Latitude:</strong> {hotel.latitude}
              </p>
              <p>
                <strong>Longitude:</strong> {hotel.longitude}
              </p>
            </div>

            <button
              type="button"
              className="calculate-distance-btn"
              onClick={handleCalculateDistance}
              disabled={isCalculating}
            >
              <span className="btn-icon">📍</span>
              {isCalculating
                ? "Calculating Distance & Route..."
                : distance
                ? "Recalculate Route From My Location"
                : "Calculate Distance From My Location"}
            </button>

            {distance !== null && (
              <div className="distance-result-badge">
                <div className="badge-content">
                  <span className="distance-label">Distance to Hotel:</span>
                  <span className="distance-value">{distance} km</span>
                </div>
                <span className="route-status">✓ Route Connected</span>
              </div>
            )}

            {userLocation && (
              <p className="user-coords-text">
                Your location: {userLocation[0].toFixed(4)}° N, {userLocation[1].toFixed(4)}° E
              </p>
            )}
          </div>

          <div className="details-box map-box">
            <MapContainer
              center={hotelPosition}
              zoom={13}
              scrollWheelZoom={true}
              className="details-map-container"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapBoundsHandler
                userLocation={userLocation}
                hotelPosition={hotelPosition}
                routeCoords={routeCoordinates}
              />

              {routeCoordinates.length > 0 && (
                <Polyline
                  positions={routeCoordinates}
                  pathOptions={{
                    color: "#345882",
                    weight: 5,
                    opacity: 0.85,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray:
                      routeCoordinates.length === 2 ? "8, 10" : undefined,
                  }}
                >
                  <Popup>
                    <div className="route-popup-card">
                      <strong className="route-popup-title">
                        Route to {hotel.title}
                      </strong>
                      <div className="route-popup-dist">
                        {distance} km
                      </div>
                    </div>
                  </Popup>
                </Polyline>
              )}

              <Marker position={hotelPosition} icon={hotelMarkerIcon}>
                <Popup>
                  <div className="hotel-popup-card">
                    <strong className="hotel-popup-title">{hotel.title}</strong>
                    <div className="hotel-popup-price">
                      ₹{Number(hotel.price).toLocaleString("en-IN")} / night
                    </div>
                    <div className="hotel-popup-coords">
                      Lat: {hotel.latitude}, Lon: {hotel.longitude}
                    </div>
                  </div>
                </Popup>
              </Marker>

              {userLocation && (
                <Marker position={userLocation} icon={userMarkerIcon}>
                  <Popup>
                    <div className="user-popup-card">
                      <strong className="user-popup-title">
                        📍 Your Current Location
                      </strong>
                      {distance && (
                        <div className="user-popup-dist">
                          Distance: <strong>{distance} km</strong>
                        </div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <p>Task done by Swathini</p>
      </footer>
    </div>
  );
}

export default HotelDetails;
