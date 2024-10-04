// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";
// import { Link } from "react-router-dom";

// const UserOrderHistory = () => {
//   const [orderHistory, setOrderHistory] = useState(null);

//   useEffect(() => {
//     const fetchOrderHistory = async () => {
//       const userId = localStorage.getItem("id");
//       const token = localStorage.getItem("token");

//       if (!userId || !token) {
//         console.error("User ID or token is missing.");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "https://readwitha-1.onrender.com/api/v1/get-order-history",
//           {},
//           {
//             headers: {
//               id: userId,
//               authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setOrderHistory(response.data.data);
//       } catch (error) {
//         console.error(
//           "Error fetching order history:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchOrderHistory();
//   }, []);

//   if (orderHistory === null) {
//     return (
//       <div className="flex items-center justify-center h-[100%]">
//         <Loader />
//       </div>
//     );
//   }

//   if (orderHistory.length === 0) {
//     return (
//       <div className="h-[80vh] p-4 text-zinc-100">
//         <div className="h-[100%] flex flex-col items-center justify-center">
//           <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
//             No Order History
//           </h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-[100%] p-0 md:p-4 text-zinc-100">
//       <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//         Your Order History
//       </h1>

//       <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
//         <div className="w-[3%]">
//           <h1 className="text-center">Sr.</h1>
//         </div>
//         <div className="w-[22%]">
//           <h1>Books</h1>
//         </div>
//         <div className="w-[45%]">
//           <h1>Description</h1>
//         </div>
//         <div className="w-[9%]">
//           <h1>Price</h1>
//         </div>
//         <div className="w-[16%]">
//           <h1>Status</h1>
//         </div>
//         <div className="w-none md:w-[5%] hidden md:block">
//           <h1>Mode</h1>
//         </div>
//       </div>

//       {orderHistory.map((items, i) => (
//         <div
//           key={items._id} // Use the unique ID of the order
//           className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer"
//         >
//           <div className="w-[3%]">
//             <h1 className="text-center">{i + 1}</h1>
//           </div>
//           <div className="w-[22%]">
//             <Link
//               to={`/view/book-details/${items.book._id}`}
//               className="hover:text-blue-300"
//             >
//               {items.book.title}
//             </Link>
//           </div>
//           <div className="w-[45%]">
//             <h1>{items.book.desc.slice(0, 50)}...</h1>
//           </div>
//           <div className="w-[9%]">
//             <h1>₹ {items.book.price}</h1>
//           </div>
//           <div className="w-[16%]">
//             <h1 className="font-semibold text-green-500">
//               {items.status === "Order placed" ? (
//                 <span className="text-yellow-500">{items.status}</span>
//               ) : items.status === "Canceled" ? (
//                 <span className="text-red-500">{items.status}</span>
//               ) : (
//                 items.status
//               )}
//             </h1>
//           </div>
//           <div className="w-none md:w-[5%] hidden md:block">
//             <h1 className="text-sm text-zinc-400">COD</h1>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserOrderHistory;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const UserOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState(null);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      const userId = localStorage.getItem("id");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        console.error("User ID or token is missing.");
        return;
      }

      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-order-history",
          {
            headers: {
              id: userId,
              authorization: `Bearer ${token}`,
            },
          }
        );
        setOrderHistory(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching order history:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchOrderHistory();
  }, []);

  if (orderHistory === null) {
    return (
      <div className="flex items-center justify-center h-[100%]">
        <Loader />
      </div>
    );
  }

  if (orderHistory.length === 0) {
    return (
      <div className="h-[80vh] p-4 text-zinc-100">
        <div className="h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
            No Order History
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100%] p-0 md:p-4 text-zinc-100">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Your Order History
      </h1>

      <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
        <div className="w-[3%]">
          <h1 className="text-center">Sr.</h1>
        </div>
        <div className="w-[22%]">
          <h1>Books</h1>
        </div>
        <div className="w-[45%]">
          <h1>Description</h1>
        </div>
        <div className="w-[9%]">
          <h1>Price</h1>
        </div>
        <div className="w-[16%]">
          <h1>Status</h1>
        </div>
        <div className="w-none md:w-[5%] hidden md:block">
          <h1>Mode</h1>
        </div>
      </div>

      {orderHistory.map((item, i) => (
        <div
          key={item._id}
          className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer"
        >
          <div className="w-[3%]">
            <h1 className="text-center">{i + 1}</h1>
          </div>
          <div className="w-[22%]">
            <Link
              to={`/view/book-details/${item.book._id}`}
              className="hover:text-blue-300"
            >
              {item.book.title}
            </Link>
          </div>
          <div className="w-[45%]">
            <h1>{item.book.desc.slice(0, 50)}...</h1>
          </div>
          <div className="w-[9%]">
            <h1>₹ {item.book.price}</h1>
          </div>
          <div className="w-[16%]">
            <h1 className="font-semibold text-green-500">
              {item.status === "Order placed" ? (
                <span className="text-yellow-500">{item.status}</span>
              ) : item.status === "Canceled" ? (
                <span className="text-red-500">{item.status}</span>
              ) : (
                item.status
              )}
            </h1>
          </div>
          <div className="w-none md:w-[5%] hidden md:block">
            <h1 className="text-sm text-zinc-400">COD</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrderHistory;
