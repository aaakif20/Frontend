// import React from "react";
// import { useEffect } from "react";
// import axios from "axios";

// const AllOrders = () => {
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "https://readwitha-1.onrender.com/api/v1/get-all-orders",
//         { headers }
//       );
//       console.log(response.data.data);
//     };
//     fetch();
//   }, []);

//   return <div>AllOrders</div>;
// };

// export default AllOrders;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-all-orders",
          { headers }
        );
        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again later.");
      }
    };

    fetchOrders();
  }, [headers]);

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>All Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id}, Book: {order.book.title}, User:{" "}
            {order.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllOrders;
