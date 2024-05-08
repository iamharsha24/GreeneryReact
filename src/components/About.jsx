import React from 'react'

function About(props) {
  return (
  <section className='text-center'>
  <div class="md:flex">
  <div class="border border-black p-2 m-6 text-center">
    <div>{props.img}</div>

    <h2 class="font-medium text-xl">{props.title}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
      unde, iure eos numquam ipsa modi ipsum quas autem sint amet iste
      doloremque veritatis aliquam hic, itaque ratione officia quasi
      aspernatur?
    </p>
  </div>
</div>
</section>
  )
}

export default About