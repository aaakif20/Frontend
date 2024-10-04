import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-auto md:h-[75vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Discover Your Great Next Read
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300 text-center lg:text-left">
          Uncover captivating stories, enriching knowledge, and endless
          inspiration in our curated collection of books.
        </p>

        <div className="mt-8">
          <Link
            to="/all-books"
            className="text-yellow-100 text-lg md:text-xl lg:text-2xl font-semibold border border-yellow-100 px-8 md:px-10 py-2 md:py-3 hover:bg-zinc-800 rounded-full transition-all duration-300"
          >
            Discover Books
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/6 flex items-center justify-center">
        <img
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-3xl"
          src="./Hero.png"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;