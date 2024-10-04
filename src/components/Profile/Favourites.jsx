import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchFavouriteBooks = async () => {
      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-favourite-books",
          { headers }
        );
        setFavouriteBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching favourite books:", error);
      }
    };

    fetchFavouriteBooks();
  }, []);

  const removeBookFromFavourites = (bookId) => {
    setFavouriteBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== bookId)
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {favouriteBooks.length > 0 ? (
        favouriteBooks.map((item) => (
          <div key={item._id}>
            <BookCard
              data={item}
              favourite={true}
              onRemove={removeBookFromFavourites}
            />
          </div>
        ))
      ) : (
        <div className="col-span-4 flex items-center justify-center h-full">
          <p className="text-2xl text-white font-bold">No Favourite Books</p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
