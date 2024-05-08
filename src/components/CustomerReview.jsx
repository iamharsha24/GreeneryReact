import React from 'react'

function CustomerReview() {
  return (
    <section className="mt-5">
      <h1 className="text-center font-bold text-3xl">Customer Reviews</h1>

      <div className="flex flex-col gap-5 m-5 mt-5 text-white">
        <div className="container rounded bg-green-900 p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
            soluta et laboriosam! Cum atque magni doloremque voluptas aliquid,
            repellat voluptate totam dolore doloribus ipsum vero similique eum
            voluptatum numquam?
          </p>
          <p className="font-bold text-yellow-300">Antony Das</p>
        </div>

        <div className="container rounded bg-green-900 p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
            soluta et laboriosam! Cum atque magni doloremque voluptas aliquid,
            repellat voluptate totam dolore doloribus ipsum vero similique eum
            voluptatum numquam?
          </p>
          <p className="font-bold text-yellow-300">Harold Das</p>
        </div>

        <div className="container rounded bg-green-900 p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
            soluta et laboriosam! Cum atque magni doloremque voluptas aliquid,
            repellat voluptate totam dolore doloribus ipsum vero similique eum
            voluptatum numquam?
          </p>
          <p className="font-bold text-yellow-300">Leo Das</p>
        </div>
      </div>
    </section>
  )
}

export default CustomerReview