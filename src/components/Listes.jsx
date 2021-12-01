import React from 'react';
import {FaTrash} from "react-icons/fa";

function Listes(props) {
    const index = props.index
    const data = props.data;
    return (
        <li className="listItems">
            <span>{data.name}</span>
            <button onClick={() => props.delete(index)}><FaTrash/></button>
        </li>
    )
}

export default Listes;
