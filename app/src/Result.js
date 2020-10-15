import React, { useState } from 'react'

function Result() {
    const [verdict, setVerdict] = useState('')
    return (
        <div>
            <p>Here are your results</p>
            {verdict}
        </div>
    )
}

export default Result