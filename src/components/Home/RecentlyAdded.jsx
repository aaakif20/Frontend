import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";

const RecentlyAdded = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-recent-books"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="mt-8 px-4">
      <h4 className="text-3xl md:text-4xl text-yellow-100 mb-4">
        Recently Added Books
      </h4>
      {!data ? (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      ) : (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((item, i) => (
            <div key={i} className="flex justify-center">
              <BookCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyAdded;
