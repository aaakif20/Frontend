// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";

// const Sidebar = ({ data }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const role = useSelector((state) => state.auth.role);

//   return (
//     <div className="bg-zinc-800 p-4 rounded-xl flex flex-col h-full">
//       <div className="flex items-center flex-col justify-center mb-4">
//         <img
//           src={data.avatar}
//           alt="User Avatar"
//           className="h-24 w-24 rounded-full"
//         />
//         <p className="mt-3 text-xl text-zinc-100 font-semibold">
//           {data.username}
//         </p>
//         <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
//       </div>

//       <div className="flex-grow flex flex-col">
//         {role === "user" && (
//           <div className="flex flex-col items-center">
//             <Link
//               to="/profile"
//               className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
//             >
//               Favourites
//             </Link>
//             <Link
//               to="/profile/orderHistory"
//               className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 transition-all"
//             >
//               Order History
//             </Link>
//             <Link
//               to="/profile/settings"
//               className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
//             >
//               Settings
//             </Link>
//           </div>
//         )}

//         {role === "admin" && (
//           <div className="flex flex-col items-center">
//             <Link
//               to="/profile"
//               className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
//             >
//               All Orders
//             </Link>
//             <Link
//               to="/profile/add-book"
//               className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 transition-all"
//             >
//               Add Book
//             </Link>
//           </div>
//         )}
//       </div>

//       <button
//         className="bg-zinc-900 w-full mt-4 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300"
//         onClick={() => {
//           dispatch(authActions.logout());
//           dispatch(authActions.changeRole("user"));
//           localStorage.clear("id");
//           localStorage.clear("token");
//           localStorage.clear("role");
//           navigate("/");
//         }}
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const Sidebar = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="bg-zinc-800 p-4 rounded-xl flex flex-col h-full">
      <div className="flex items-center flex-col justify-center mb-4">
        <img
          src={data.avatar}
          alt="User Avatar"
          className="h-24 w-24 rounded-full object-cover"
        />
        <p className="mt-3 text-xl text-zinc-100 font-semibold text-center">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300 text-center">
          {data.email}
        </p>
      </div>

      <div className="flex-grow flex flex-col">
        {role === "user" && (
          <div className="flex flex-col">
            <Link
              to="/profile"
              className="text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all"
            >
              Favourites
            </Link>
            <Link
              to="/profile/orderHistory"
              className="text-zinc-100 font-semibold py-2 mt-4 text-center hover:bg-zinc-900 transition-all"
            >
              Order History
            </Link>
            <Link
              to="/profile/settings"
              className="text-zinc-100 font-semibold py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
            >
              Settings
            </Link>
          </div>
        )}

        {role === "admin" && (
          <div className="flex flex-col">
            <Link
              to="/profile"
              className="text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all"
            >
              All Orders
            </Link>
            <Link
              to="/profile/add-book"
              className="text-zinc-100 font-semibold py-2 mt-4 text-center hover:bg-zinc-900 transition-all"
            >
              Add Book
            </Link>
          </div>
        )}
      </div>

      <button
        className="bg-zinc-900 w-full mt-4 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300"
        onClick={() => {
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("user"));
          localStorage.clear("id");
          localStorage.clear("token");
          localStorage.clear("role");
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
