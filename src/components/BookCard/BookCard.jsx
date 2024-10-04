import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data, favourite, onRemove }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleRemoveBook = async () => {
    try {
      await axios.delete(
        "https://readwitha-1.onrender.com/api/v1/remove-book-from-favourite",
        {
          headers: {
            ...headers,
            bookid: data._id, // Include the book ID in the headers
          },
        }
      );
      alert("Book removed from favourites.");
      onRemove(data._id); // Call the function to remove the book from the state
    } catch (error) {
      console.error("Error removing book:", error);
      alert("Failed to remove book from favourites.");
    }
  };

  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col transition-transform transform hover:scale-105 max-w-xs w-full mx-auto">
      <Link to={`/view-book-details/${data._id}`}>
        <div className="flex flex-col items-center">
          <div className="bg-zinc-900 rounded overflow-hidden">
            <img src={data.url} alt={data.title} className="w-full h-auto" />
          </div>

          <h2 className="mt-4 text-xl text-white font-semibold text-center">
            {data.title}
          </h2>

          <p className="mt-2 text-zinc-400 font-semibold text-center">
            By - {data.author}
          </p>

          <p className="mt-2 text-zinc-400 font-semibold text-xl text-center">
            ₹ {data.price}
          </p>
        </div>
      </Link>

      {favourite && (
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded border border-indigo-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleRemoveBook}
        >
          Remove from favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;
