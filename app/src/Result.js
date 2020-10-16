import React, { useState } from 'react'

function Result(props) {
    const [verdict, setVerdict] = useState('')
    return (
        <div>
            <p>Here are your results</p>
            {props.product_title}
            {props.next_page}
            {props.reviews}
        </div>
    )
}

export default Result