import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='bg-green-100 p-3 flex items-center justify-between shadow-xl sticky top-0 z-10'>
        <h1 class="text-2xl">GREENERY</h1>
        <svg
        id="menuicon"
        xmlns="http://www.w3.org/ 2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 md:hidden cursor-pointer">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <ul class="gap-5 text-gray-600 hidden md:flex">
        
        <li> <a href="./" class="hover:underline hover:text-black">Home</a></li>
        <li><a href="./product.html" class="hover:underline hover:text-black">Products</a></li>
        <li><a href="./contact.html" class="hover:underline hover:text-black">Contact</a></li>
      </ul>
        </nav>
    </div>
  )
}

export default Navbar