// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../components/Loader/Loader";
// import BookCard from "../components/BookCard/BookCard";

// const AllBooks = () => {
//   const [Data, setData] = useState();
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:3001/api/v1/get-all-books"
//       );
//       setData(response.data.data);
//     };
//     fetch();
//   }, []);

//   return (
//     <div className="bg-zinc-900 h-auto px-12 py-8">
//       <h4 className="text-3xl text-yellow-100">All Added Books</h4>
//       {!Data && (
//         <div className="flex items-center justify-center my-8">
//           <Loader />
//         </div>
//       )}
//       <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
//         {Data &&
//           Data.map((items, i) => (
//             <div key={i}>
//               <BookCard data={items} />{" "}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AllBooks;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import BookCard from "../components/BookCard/BookCard";

const AllBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-all-books"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="bg-zinc-900 h-auto px-4 sm:px-8 md:px-12 py-8">
      <h4 className="text-3xl text-yellow-100 text-center mb-6">
        All Added Books
      </h4>
      {!data.length && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
            <BookCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
