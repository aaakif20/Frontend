import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/profile" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  // Filter links based on login status
  const filteredLinks = isLoggedIn
    ? links
    : links.filter((item) => item.title !== "Cart" && item.title !== "Profile");

  if (isLoggedIn == true && role === "user") {
    links.splice(4, 1);
  }

  if (isLoggedIn == true && role === "admin") {
    links.splice(3, 1);
  }
  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-semibold">ReadWithA</h1>
        </Link>
        <div className="nav-links-readwita block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {filteredLinks.map((item) => (
              <Link
                to={item.link}
                className={`flex items-center ${
                  item.title === "Profile" || item.title === "Admin Profile"
                    ? "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-800"
                    : "hover:text-blue-500 transition-all duration-300"
                }`}
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {!isLoggedIn && (
            <div className="hidden md:flex gap-4">
              <Link
                to="/Login"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-800"
              >
                Log In
              </Link>
              <Link
                to="/SignUp"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-800"
              >
                Sign Up
              </Link>
            </div>
          )}

          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-400"
            onClick={() => setMobileNav((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center ${
          mobileNav ? "block" : "hidden"
        }`}
      >
        {filteredLinks.map((item) => (
          <Link
            to={item.link}
            className="text-white mb-8 text-4xl font-semibold hover:text-blue-500 transition-all duration-300"
            key={item.title}
            onClick={() => setMobileNav(false)}
          >
            {item.title}
          </Link>
        ))}

        {!isLoggedIn && (
          <>
            <Link
              to="/Login"
              className="px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-800"
            >
              Log In
            </Link>
            <Link
              to="/SignUp"
              className="px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-800"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
