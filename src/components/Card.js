import React, { useState } from "react";
import { ReactDOM } from "react";

export default function Card() {
    const [things, setThings] = useState(['Thing 1', 'Thing 2'])
    const thingsElements = things.map( thing=><p key={thing}>{thing}</p> )
    const addItem = () => {
        const nextThing = `Thing ${things.length + 1}`
        setThings(preThings =>[ ...preThings, nextThing])

    }

    return(
        <div>

            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>

    );


}