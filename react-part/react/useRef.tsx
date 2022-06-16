/**
 * @todo what is the output on every button press?
 */

import React, { useRef } from 'react';

function Ref() {
    const count = useRef(0);

    return (
        <button onClick={() => count.current++}>
            {count.current}
        </button>
    )
}
