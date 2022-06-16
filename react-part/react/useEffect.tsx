import React, { useState, useEffect } from 'react';

function Effect() {

    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    })

    return (
        <button onClick={() => setCount(count + 1)}> {count} </button>

    )
}

/**
 * @todo remove the loop from the useEffect
 */