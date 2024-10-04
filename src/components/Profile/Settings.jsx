// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader"; // Ensure you have this component

// const Settings = () => {
//   const [value, setValue] = useState({ address: "" });
//   const [profileData, setProfileData] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState(""); // For status messages

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`, // Fixed typo here
//   };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(
//           "https://readwitha-1.onrender.com/api/v1/get-user-information",
//           { headers }
//         );
//         setProfileData(response.data);
//         setValue({ address: response.data.address });
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchProfileData();
//   }, []);

//   const updateAddress = async () => {
//     try {
//       const response = await axios.put(
//         "https://readwitha-1.onrender.com/api/v1/update-address",
//         { address: value.address },
//         { headers }
//       );
//       setUpdateStatus(response.data.message);
//     } catch (error) {
//       console.error("Error updating address:", error);
//       setUpdateStatus("Failed to update address.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
//       {!profileData && <Loader />}
//       {profileData && (
//         <>
//           <h1 className="text-2xl font-bold text-center text-white mb-6">
//             Settings
//           </h1>

//           <div className="mb-4 text-center">
//             <label className="block text-gray-400 mb-1">Username</label>
//             <p className="text-white">{profileData.username}</p>
//           </div>

//           <div className="mb-4 text-center">
//             <label className="block text-gray-400 mb-1">Email</label>
//             <p className="text-white">{profileData.email}</p>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-400 mb-1">Address</label>
//             <textarea
//               value={value.address}
//               onChange={(e) => setValue({ address: e.target.value })}
//               className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded transition duration-200 focus:border-blue-500 focus:outline-none"
//               rows="4"
//             ></textarea>
//           </div>

//           <button
//             onClick={updateAddress}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//           >
//             Update
//           </button>

//           {updateStatus && (
//             <p className="text-center text-green-400 mt-4">{updateStatus}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Settings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader"; // Ensure you have this component

const Settings = () => {
  const [value, setValue] = useState({ address: "" });
  const [profileData, setProfileData] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(""); // For status messages

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "https://readwitha-1.onrender.com/api/v1/get-user-information",
          { headers }
        );
        setProfileData(response.data);
        setValue({ address: response.data.address });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchProfileData();
  }, []);

  const updateAddress = async () => {
    try {
      const response = await axios.put(
        "https://readwitha-1.onrender.com/api/v1/update-address",
        { address: value.address },
        { headers }
      );
      setUpdateStatus(response.data.message);
    } catch (error) {
      console.error("Error updating address:", error);
      setUpdateStatus("Failed to update address.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      {!profileData && <Loader />}
      {profileData && (
        <>
          <h1 className="text-2xl font-bold text-center text-white mb-6">
            Settings
          </h1>

          <div className="mb-4 text-center">
            <label className="block text-gray-400 mb-1">Username</label>
            <p className="text-white">{profileData.username}</p>
          </div>

          <div className="mb-4 text-center">
            <label className="block text-gray-400 mb-1">Email</label>
            <p className="text-white">{profileData.email}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Address</label>
            <textarea
              value={value.address}
              onChange={(e) => setValue({ address: e.target.value })}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded transition duration-200 focus:border-blue-500 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          <button
            onClick={updateAddress}
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-200"
          >
            Update
          </button>

          {updateStatus && (
            <p className="text-center text-green-400 mt-4">{updateStatus}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Settings;
