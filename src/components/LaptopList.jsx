import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/990942b2-d6e4-426e-971a-76f5af845669')
      .then((response) => {
        setLaptops(response.data);
      })
      .catch((error) => console.error("Error fetching laptop data", error));
  }, []);

  const filteredLaptops = laptops.filter(laptop => 
    laptop.specifications.brand.toLowerCase().includes(search.toLowerCase()) || 
    laptop.specifications.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="center-container">
        <h1>Laptop Specifications Catalog</h1>
        <input 
          type="text" 
          placeholder="Search by brand or model" 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      
      <div className="laptop-list">
        {filteredLaptops.map(laptop => (
          <div key={laptop.id} className="laptop-item">
            <img src={laptop.imageUrl} alt={laptop.specifications.model} width="200" />
            <h3>{laptop.specifications.brand} {laptop.specifications.model}</h3>
            <p>Price: ${laptop.pricing.basePrice}</p>
            <Link to={`/laptop/${laptop.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopList;