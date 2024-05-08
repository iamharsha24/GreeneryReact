import React from 'react'
import bestseller1 from "../assets/bestseller_1.png"
import bestseller2 from "../assets/bestseller_2.png"

function Bestseller() {
  return (
    <section className='p-4 text-center'>
        <h1 className="text-3xl font-bold mt-5">Best Seller</h1>

        <div className='grid grid-cols-2 gap-5 mt-10 md:grid-cols-4'>
        <div>
          <img src={bestseller1}
          className='inline hover:shadow-xl transform hover:-translate-y-2' alt=""
          />
          <h1>Rose Plant</h1>
          <p>&#8377; 200</p>
        </div>
        <div>
          <img
            src={bestseller2}
            class="inline hover:shadow-xl transform hover:-translate-y-2"
            alt=""
          />
          <h1>Lilly Plant</h1>
          <p>&#8377; 299</p>
        </div>
        <div>
          <img src={bestseller1}
          className='inline hover:shadow-xl transform hover:-translate-y-2' alt=""
          />
          <h1>Rose Plant</h1>
          <p>&#8377; 200</p>
        </div>
        <div>
          <img
            src={bestseller2}
            class="inline hover:shadow-xl transform hover:-translate-y-2"
            alt=""
          />
          <h1>Lilly Plant</h1>
          <p>&#8377; 299</p>
        </div>
        </div>

    </section>
  )
}

export default Bestseller