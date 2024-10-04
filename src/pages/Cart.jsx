import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);

  const headers = useMemo(
    () => ({
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    []
  );

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          `https://readwitha-1.onrender.com/api/v1/get-user-cart`,
          { headers }
        );
        console.log("Fetched cart data:", response);
        if (response.data && response.data.data) {
          setCart(response.data.data);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error(
          "Error fetching cart:",
          error.response ? error.response.data : error.message
        );
        alert("Failed to fetch cart data. Please try again.");
      }
    };

    fetchCartData();
  }, [headers]);

  useEffect(() => {
    const total = Cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [Cart]);

  const deleteItem = async (bookid) => {
    try {
      const response = await axios.delete(
        `https://readwitha-1.onrender.com/api/v1/remove-from-cart/${bookid}`,
        { headers }
      );
      alert(response.data.message);
      setCart((prevCart) => prevCart.filter((item) => item.id !== bookid));
    } catch (error) {
      console.error("Error deleting item:", error);
      alert(
        `Failed to delete item: ${
          error.response?.data.message || "An error occurred."
        }`
      );
    }
  };

  const handleOrderPlacement = async () => {
    try {
      const response = await axios.post(
        `https://readwitha-1.onrender.com/api/v1/place-order`,
        { order: Cart },
        { headers }
      );
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-900 px-4 md:px-12 h-screen py-8 flex flex-col">
      {Cart.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-6xl text-zinc-500">Cart is empty</h1>
        </div>
      ) : (
        <>
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
            Your Cart
          </h1>
          <div className="flex-grow overflow-y-auto">
            {Cart.map((item) => (
              <div
                className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center"
                key={item.id}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-[20vh] md:h-[10vh] object-cover"
                />
                <div className="w-full md:w-auto">
                  <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">
                    {item.title}
                  </h1>
                  <p className="text-normal text-zinc-300 mt-2 hidden lg:block">
                    {item.desc.slice(0, 100)}
                  </p>
                  <p className="text-normal text-zinc-300 mt-2 hidden md:block lg:block">
                    {item.desc.slice(0, 65)}
                  </p>
                  <p className="text-normal text-zinc-300 mt-2 block md:hidden">
                    {item.desc.slice(0, 100)}
                  </p>
                </div>
                <div className="flex mt-4 w-full md:w-auto items-center justify-between">
                  <h2 className="text-zinc-100 text-3xl font-semibold flex">
                    ₹{item.price}
                  </h2>
                  <button
                    className="bg-red-100 text-red-700 border-red-700 rounded p-2 ms-12"
                    onClick={() => deleteItem(item.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4 mb-4">
            <div className="text-2xl text-zinc-100">Total: ₹{Total}</div>
            <button
              className="bg-green-500 text-white rounded p-2"
              onClick={handleOrderPlacement}
            >
              Place Your Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
