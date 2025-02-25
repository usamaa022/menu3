import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <span className="ml-2 text-xl font-bold">MyLogo</span>
      </div>
      <div className="flex space-x-4">
        <a href="/" className="hover:text-gray-400">
          HOME
        </a>
        <a href="/about/" className="hover:text-gray-400">
          ABOUT
        </a>
        <a href="/menu/" className="hover:text-gray-400">
          MENU
        </a>
        <a href="/contacts/" className="hover:text-gray-400">
          CONTACTS
        </a>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        BOOK A TABLE
      </button>
    </nav>
  );
};

export default Navbar;