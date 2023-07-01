import React from 'react'

const Card = () => {
    return (
        <div className='card__container'>
            <div className="card w-96 shadow-xl card1">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn card3">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl card2">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn card3">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl card3">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn card3">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card