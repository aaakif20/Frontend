// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";
// import { useNavigate, useParams } from "react-router-dom";
// import { GrLanguage } from "react-icons/gr";
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";
// import { Link } from "react-router-dom";

// const ViewBookDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [Data, setData] = useState();
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const role = useSelector((state) => state.auth.role);
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         `https://readwitha-1.onrender.com/api/v1/get-book-by-id/${id}`
//       );
//       setData(response.data.data);
//     };

//     fetch();
//   }, []);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: id,
//   };

//   const handleFavourtie = async () => {
//     const response = await axios.put(
//       "https://readwitha-1.onrender.com/api/v1/add-book-to-favourite",
//       {},
//       { headers }
//     );
//     alert(response.data.message);
//   };

//   const handleCart = async () => {
//     const response = await axios.put(
//       "https://readwitha-1.onrender.com/api/v1/add-to-cart",
//       {},
//       { headers }
//     );
//     alert(response.data.message);
//   };

//   const deleteBook = async () => {
//     const response = await axios.delete(
//       "https://readwitha-1.onrender.com/api/v1/delete-book",
//       { headers }
//     );
//     alert(response.data.message);
//     navigate("/all-books");
//   };

//   return (
//     <>
//       {Data ? (
//         <div className=" px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8 itms-start">
//           {" "}
//           <div className="bg-zinc-800 rounded px-4 py-12 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex justify-around gap-8">
//             <img
//               src={Data.url}
//               alt={Data.title}
//               className="h-full max-h-[70vh] w-auto rounded object-cover"
//             />
//           </div>
//           {isLoggedIn === true && role === "user" && (
//             <div className="flex flex-col gap-4 flex-row-mobile">
//               <button
//                 className="bg-white rounded-full text-2xl p-3 text-red-500 max-w-[50px] max-h-[50px] flex items-center justify-center"
//                 onClick={handleFavourtie}
//               >
//                 <FaHeart className="w-6 h-6" />
//               </button>
//               <button
//                 className="bg-white rounded-full text-2xl p-3 text-blue-500 max-w-[50px] max-h-[50px] flex items-center justify-center"
//                 onClick={handleCart}
//               >
//                 <FaShoppingCart className="w-6 h-6" />
//               </button>
//             </div>
//           )}
//           {isLoggedIn === true && role === "admin" && (
//             <div className="flex flex-col gap-4 flex-row-mobile">
//               <Link
//                 to={`/updateBook/${id}`}
//                 className="bg-white rounded-full text-2xl p-3 max-w-[50px] max-h-[50px] flex items-center justify-center"
//               >
//                 <FaEdit />
//               </Link>
//               <button
//                 className="bg-white rounded-full text-2xl p-3 text-blue-500 max-w-[50px] max-h-[50px] flex items-center justify-center"
//                 onClick={deleteBook}
//               >
//                 <MdDeleteOutline />
//               </button>
//             </div>
//           )}
//           <div className="p-4 w-full lg:w-3/6">
//             <h1 className="text-4xl text-zinc-300 font-semibold">
//               {Data.title}
//             </h1>
//             <p className="text-zinc-400 mt-1">By {Data.author}</p>
//             <p className="text-zinc-500 mt-4 text-xl">{Data.desc}</p>
//             <p className="flex mt-4 items-center justify-start text-zinc-400">
//               <GrLanguage className="me-3" />
//               {Data.language}
//             </p>

//             <p className="mt-4 text-zinc-100 text-3xl font-semibold">
//               Price: ₹ {Data.price}
//             </p>
//           </div>
//           <div className="p-4 w-3/6"></div>
//         </div>
//       ) : (
//         <div className="h-screen bg-zinc-900 flex items-center justify-center">
//           <Loader />
//         </div>
//       )}
//     </>
//   );
// };

// export default ViewBookDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://readwitha-1.onrender.com/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
    };

    fetch();
  }, [id]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };

  const handleFavourtie = async () => {
    const response = await axios.put(
      "https://readwitha-1.onrender.com/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const handleCart = async () => {
    const response = await axios.put(
      "https://readwitha-1.onrender.com/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const deleteBook = async () => {
    const response = await axios.delete(
      "https://readwitha-1.onrender.com/api/v1/delete-book",
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books");
  };

  return (
    <>
      {Data ? (
        <div className="px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-zinc-800 rounded px-4 py-12 h-[60vh] lg:h-[80vh] w-full lg:w-3/6 flex justify-center">
            <img
              src={Data.url}
              alt={Data.title}
              className="h-full max-h-[70vh] w-auto rounded object-cover"
            />
          </div>
          <div className="p-4 w-full lg:w-3/6 flex flex-col">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">By {Data.author}</p>
            <p className="text-zinc-500 mt-4 text-xl break-words">
              {Data.desc}
            </p>
            <p className="flex mt-4 items-center justify-start text-zinc-400">
              <GrLanguage className="me-3" />
              {Data.language}
            </p>
            <p className="mt-4 text-zinc-100 text-3xl font-semibold">
              Price: ₹ {Data.price}
            </p>

            {isLoggedIn && (
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                {role === "user" ? (
                  <>
                    <button
                      className="bg-white rounded-full text-2xl p-3 text-red-500 flex items-center justify-center"
                      onClick={handleFavourtie}
                    >
                      <FaHeart className="w-6 h-6" />
                    </button>
                    <button
                      className="bg-white rounded-full text-2xl p-3 text-blue-500 flex items-center justify-center"
                      onClick={handleCart}
                    >
                      <FaShoppingCart className="w-6 h-6" />
                    </button>
                  </>
                ) : role === "admin" ? (
                  <>
                    <Link
                      to={`/updateBook/${id}`}
                      className="bg-white rounded-full text-2xl p-3 flex items-center justify-center"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      className="bg-white rounded-full text-2xl p-3 text-blue-500 flex items-center justify-center"
                      onClick={deleteBook}
                    >
                      <MdDeleteOutline />
                    </button>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
