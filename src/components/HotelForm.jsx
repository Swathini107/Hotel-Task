import { useState } from "react";

// hotelform
function HotelForm({ initialData, onSubmit, buttonText }) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [latitude, setLatitude] = useState(initialData?.latitude ?? "");
  const [longitude, setLongitude] = useState(initialData?.longitude ?? "");
  const [price, setPrice] = useState(initialData?.price ?? "");
  const [image, setImage] = useState(initialData?.image ?? "");
  const [errors, setErrors] = useState({});

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        image: "Please select a valid image file.",
      }));
      return;
    }

    if (file.size > 500 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "Image size must be less than 500 KB.",
      }));
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      setErrors((prev) => ({ ...prev, image: "" }));
    };

    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Hotel name is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (latitude === "" || latitude === null) {
      newErrors.latitude = "Latitude is required.";
    } else if (
      !Number.isFinite(Number(latitude)) ||
      Number(latitude) < -90 ||
      Number(latitude) > 90
    ) {
      newErrors.latitude = "Latitude must be between -90 and 90.";
    }

    if (longitude === "" || longitude === null) {
      newErrors.longitude = "Longitude is required.";
    } else if (
      !Number.isFinite(Number(longitude)) ||
      Number(longitude) < -180 ||
      Number(longitude) > 180
    ) {
      newErrors.longitude = "Longitude must be between -180 and 180.";
    }

    if (price === "" || price === null) {
      newErrors.price = "Price is required.";
    } else if (
      !Number.isFinite(Number(price)) ||
      Number(price) <= 0
    ) {
      newErrors.price = "Price must be greater than zero.";
    }

    if (!image) {
      newErrors.image = "Hotel image is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      latitude: Number(latitude),
      longitude: Number(longitude),
      price: Number(price),
      image,
    });
  };

  return (
    <div className="hotel-form-container">
      <form className="hotel-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Hotel Name</label>
          <input
            id="title"
            type="text"
            placeholder="Enter hotel name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="error-message">{errors.title}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe the hotel"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              type="number"
              step="any"
              placeholder="Eg. 11.0168"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            {errors.latitude && (
              <p className="error-message">{errors.latitude}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              type="number"
              step="any"
              placeholder="Eg. 76.9558"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
            {errors.longitude && (
              <p className="error-message">{errors.longitude}</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price per Night (₹)</label>
          <input
            id="price"
            type="number"
            min="1"
            step="any"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && (
            <p className="error-message">{errors.price}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="image">Hotel Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <small className="form-hint">
            Maximum image size: 500 KB
          </small>

          {errors.image && (
            <p className="error-message">{errors.image}</p>
          )}

          {image && (
            <div className="image-preview-container">
              <img
                src={image}
                alt="Hotel preview"
                className="image-preview"
              />
            </div>
          )}
        </div>

        <button type="submit" className="form-submit-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default HotelForm;
