
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import '/home/viper43/Musfi/Final/laptop/src/LaptopDetails.css'; 

const LaptopDetails = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('https://mocki.io/v1/990942b2-d6e4-426e-971a-76f5af845669')
      .then((response) => {
        const selectedLaptop = response.data.find(laptop => laptop.id === id);
        setLaptop(selectedLaptop);
      })
      .catch((error) => console.error("Error fetching laptop details", error));
  }, [id]);

  if (!laptop) return <div>Loading...</div>;

  const handleBackClick = () => {
    navigate(-1);  
  };

  return (
    <div className="laptop-details-container">
      <div className="laptop-details-content">
        <button onClick={handleBackClick} style={{ marginBottom: '20px' }}>
          Take me back to the Catalog
        </button>
        <h1>{laptop.specifications.brand} {laptop.specifications.model}</h1>
        <img src={laptop.imageUrl} alt={laptop.specifications.model} className="laptop-image" />
        <h2>Specifications</h2>
        <ul>
          <li><strong>Year:</strong> {laptop.specifications.year}</li>
          <li><strong>Processor:</strong> {laptop.specifications.processor}</li>
          <li><strong>Memory:</strong> {laptop.specifications.memory}</li>
          <li><strong>Storage:</strong> {laptop.specifications.storage}</li>
          <li><strong>Display Size:</strong> {laptop.specifications.display.size}</li>
          <li><strong>Display Type:</strong> {laptop.specifications.display.type}</li>
        </ul>
        <h3>Pricing</h3>
        <p><strong>Base Price:</strong> ${laptop.pricing.basePrice}</p>
        <p><strong>Warranty:</strong> {laptop.pricing.warranty}</p>
      </div>
    </div>
  );
};

export default LaptopDetails;
