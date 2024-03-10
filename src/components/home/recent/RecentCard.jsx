import React, { useState, useEffect } from "react";
import { list } from "../../data/Data";
import "./recent.css";

const RecentCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });
  const [sortedList, setSortedList] = useState([]);

  const baseUrl = "https://localhost:7013";

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}/Product`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const formattedProducts = data.map((product) => ({
        id: product.Id,
        cover: product.Cover,
        name: product.Name,
        location: product.Location,
        category: product.Category,
        price: product.Price,
        type: product.Type,
      }));

      return formattedProducts;
    } catch (error) {
      throw new Error("Failed to fetch products: " + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchAllProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    let filtered = list;

    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category);
    }

    if (filters.location) {
      filtered = filtered.filter((item) => item.location === filters.location);
    }

    if (filters.price === "lowToHigh") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (filters.price === "highToLow") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    setSortedList(filtered);
  }, [filters]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="filters">
        <label className="filter-label">
          Kategori:
          <select
            className="filter-select"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Hepsi</option>
            <option value="Satılık">Satılık</option>
            <option value="Kiralık">Kiralık</option>
          </select>
        </label>
        <label className="filter-label">
          Konum:
          <select
            className="filter-select"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">Hepsi</option>
            <option value="123 Sahil Caddesi, İstanbul">
              123 Sahil Caddesi, İstanbul
            </option>
            <option value="789 Merkez Mahallesi, Ankara">
              789 Merkez Mahallesi, Ankara
            </option>
            <option value="456 Sahra Sokak, İzmir">
              456 Sahra Sokak, İzmir
            </option>
            <option value="101 Gölet Caddesi, Antalya">
              101 Gölet Caddesi, Antalya
            </option>
            <option value="789 Denizli Bulvarı, Bursa">
              789 Denizli Bulvarı, Bursa
            </option>
            <option value="456 Orman Sokak, Muğla">
              456 Orman Sokak, Muğla
            </option>
          </select>
        </label>
        <label className="filter-label">
          <label className="filter-label">Fiyat</label>
          <select
            name="price"
            className="filter-select"
            value={filters.price}
            onChange={handleFilterChange}
          >
            <option value="">Sıralama Yok</option>
            <option value="highToLow">Düşükten Yükseğe</option>
            <option value="lowToHigh">Yüksekten Düşüğe</option>
          </select>
        </label>
      </div>
      <div className="content grid3 mtop">
        {sortedList.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "Satılık" ? "#25b5791a" : "#ff98001a",
                      color: category === "Satılık" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
