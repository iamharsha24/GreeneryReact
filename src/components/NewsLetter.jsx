import React from 'react'

function NewsLetter() {
  return (
    <section className="text-center mt-10">
      <h1 className="font-bold text-3xl">Join our News Letter</h1>
      <p>
        Signup for our email newspaper to get exclusive discounts,updates and
        more.
      </p>
      <input type="text" id="emailInput" className="border border-black p-2 m-3 w-10/12" placeholder="Email ID"/><br />
      <button id="subscribeBtn" className="bg-black rounded p-3 m-1 hover:underline text-white">
        Subscribe
      </button>
    </section>
  )
}

export default NewsLetter