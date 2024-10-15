
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const params = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similar, setSimilar] = useState([]);

  const fetchItemData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2UxNzM5ZmY3MDY4NzVmZDM2NmQzNjY4ZDZjY2IzNiIsIm5iZiI6MTcyODg5OTcxOC4wODU2NTEsInN1YiI6IjY3MGNlODVmYjE1ZDk3YjFhOTNjZmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ddxxN6AQoGGkR-85Z_PfcOzimYXmYfhsXa-QJEsEak",
      },
    };

    try {
      const detailsUrl = `https://api.themoviedb.org/3/${params.media_type}/${params.id}?language=en-US`;
      const similarUrl = `https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?language=en-US`;

      const [detailsResponse, similarResponse] = await Promise.all([
        fetch(detailsUrl, options),
        fetch(similarUrl, options),
      ]);

      if (!detailsResponse.ok) {
        const errorData = await detailsResponse.json();
        throw new Error(`Error ${detailsResponse.status}: ${errorData.status_message}`);
      }

      const detailsData = await detailsResponse.json();
      setItemDetails(detailsData);

      if (!similarResponse.ok) {
        const errorData = await similarResponse.json();
        throw new Error(`Error ${similarResponse.status}: ${errorData.status_message}`);
      }

      const similarData = await similarResponse.json();
      setSimilar(similarData.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-3">
        {(() => {
        if (params.media_type !== 'person') {
          if (itemDetails.poster_path) {
            return (
              <img
                src={`https://image.tmdb.org/t/p/w500/${itemDetails.poster_path}`}
                className="w-100"
                alt={itemDetails.title || itemDetails.name || "Item Image"}
              />
            );
          } else {
            return <p>No image available</p>;
          }
        } else {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500/${itemDetails.profile_path}`}
              className="w-100"
              alt={itemDetails.title || itemDetails.name || "Item Image"}
            />
          );
        }
      })()}
        </div>
        <div className="col-md-9">
          <h2 className="fw-bold">{itemDetails.title || itemDetails.name}</h2>
          <p>{itemDetails.overview}</p>
        </div>
      </div>

      <h3 className="mt-5 fw-bold">Similar Items</h3>
      <div className="row">
        {similar.map((item) => (
          <div className="col-md-3" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="w-100"
              alt={item.title || item.name || "Similar Item"}
            />
            <h5>{item.title || item.name}</h5>
          </div>
        ))}
      </div>
    </>
  );
}
