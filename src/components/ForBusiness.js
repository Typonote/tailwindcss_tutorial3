import React, { useState } from 'react'
import data from '../data/section3'

const ForBusiness = () => {
    const [cards, setCards] = useState(data)

    
    return (
        <section className='section-2'>
            <h2 className="font-semibold text-2xl mt-5 px-8">For business</h2>
            {cards.map((card) => {
                const {id, image, title, desc, link} = card

                return (
                    <article key={id} className='p-8'>
                        <div> 
                            <img src={image} alt='card' />
                            <h3 className='font-semibold text-xl mt-2 mb-1'>{title}</h3>
                            <p>{desc}</p>
                            <button className='cursor-pointer text-red-600 font-semibold'>{link}</button>
                        </div>

                    </article>
                )
            })}
        </section>
    )
}


export default ForBusiness
