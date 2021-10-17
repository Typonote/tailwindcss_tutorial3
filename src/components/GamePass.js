import React from 'react'
import GamePassImage from '../images/game_pass_539.png'

const GamePass = () => {
    return (
        <section>
            <div>
                <img src={GamePassImage} alt='gamepass' />
            </div>

            <div className='bg-gray-800 text-white text-center p-10'>
                <h2 className='font-semibold text-xl mb-2'>Xbox Game Pass Ultimate</h2>
                <p className='mb-2'>Get your first 3 months of Xbox Game Pass Ultimate membership for $1.
          Now includes EA Play. New subscribers only.</p>
          <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80'>Join now</button>
          <button>Compare all plans</button>
            </div>
        </section>
    )
}

export default GamePass
