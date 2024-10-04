import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://readwitha-1.onrender.com/api/v1/add-book",
          Data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-full p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-500 mb-8 text-center">
        Add Book
      </h1>

      <div className="p-6 bg-zinc-800 rounded-lg shadow-lg transition-all duration-300">
        <div>
          <label className="text-zinc-400">Image</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
            placeholder="URL of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Title of Book</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
            placeholder="Title of Book"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Author of Book</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
            placeholder="Author of Book"
            name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:gap-4">
          <div className="md:w-1/2">
            <label className="text-zinc-400">Language</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
              placeholder="Language of Book"
              name="language"
              required
              value={Data.language}
              onChange={change}
            />
          </div>

          <div className="md:w-1/2">
            <label className="text-zinc-400">Price</label>
            <input
              type="number"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
              placeholder="Price of Book"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Description of Book</label>
          <textarea
            placeholder="Description of Book"
            name="desc"
            required
            value={Data.desc}
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-md transition-all duration-200 hover:bg-zinc-700"
            onChange={change}
          ></textarea>
        </div>

        <button
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-md transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
