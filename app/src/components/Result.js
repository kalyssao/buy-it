import React from 'react'

export default function Result({ verdict }) {
    return (
        <div>
            { verdict !== null
                ? 
                <div className="positive--result">
                    {/* {product.product_title}
                    {product.next_page}
                    {product.image}
                    {product.reviews} */}
                    buy it.
                </div>

                : <div className="negative--result">
                    Don't buy it!
                </div>
            
            }
        </div>
    )
}