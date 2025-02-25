import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Working Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <p className="text-gray-400">OPEN DAILY</p>
            <p className="text-gray-400">12:00 pm - 12:00 am</p>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email Address:</p>
            <p className="text-gray-400">usamaabubakr22102gmail.com</p>
            <p className="text-gray-400 mt-2">Location:</p>
            <p className="text-gray-400">Sualimanyah - Rzgary St.</p>
            <p className="text-gray-400">Data, Kurdistan-Iraq.</p>
            <p className="text-gray-400 mt-2">Phone Number:</p>
            <p className="text-gray-400">+9647766863061</p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Usama's Universe</h3>
            <p className="text-gray-400">
              Copyright © 2023 Usama. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}