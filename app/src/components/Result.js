import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {
    const location = useLocation()
    const [ verdict, setVerdict ] = useState()

    useEffect(() => {
        setVerdict(location.decision)
    }, [location])
    return (
        <div>
            Hello World!
            { verdict !== null
                ? 
                <div className="positive--result">
                    {/* {product.product_title}
                    {product.next_page}
                    {product.image}
                    {product.reviews}
                    buy it. */}
                    Buy it
                </div>

                : <div className="negative--result">
                    Don't buy it!
                </div>
            
            }
        </div>
    )
}