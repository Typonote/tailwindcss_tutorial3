import React, { useState } from 'react'
import data from '../data/section1'

const ChooseItems = () => {

    const [cards, setCards] =useState(data);

    return (
        <section>
            {cards.map((card)=>{
                const {id, text, image} = card
                return (
                    <article key={id} className='flex items-center px-6 py-2'>
                        <img src={image} alt='card'/>
                        <p className='mx-3 font-semibold hover:underline cursor-pointer '>{text}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default ChooseItems
