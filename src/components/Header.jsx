import React from "react";
import plantlogo from "../assets/images.jpeg"

function Header() {
  return (
    <section className="bg-green-100 p-4 md:p-10 flex justify-center pt-20">
      <div className="md:p-20">
        <h2 className="mb-4">
          We offer you a wide range of Artificial and Natural Flowers
        </h2>
        <h1 className="font-bold text-4xl md:text-5xl mb-5">
          Spread Green in your life.
        </h1>

        <div>
          <a href="./product.html">
            <button className="bg-black rounded text-white p-2 mb-5">Shop Now</button>
          </a>
          <button id="watchButton" className="border-black p-2 border rounded ml-2">Watch video</button>
          <p id="videoMessage" className="hidden bg-black text-green-100 w-48 rounded border">
            Video will Update Soon
          </p>
        </div>
        <p class="mt-5">160+ Plant species | 100+ Clients</p>
      </div>

      <div class="hidden md:block p-5 pt-20">
        <img
          src={plantlogo}
          alt="Header img"
          class="w-80 rounded-md shadow-xl"
        />
      </div>
    </section>
  );
}

export default Header;
