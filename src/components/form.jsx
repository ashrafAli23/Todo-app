import React from 'react';
import {FaPlus} from "react-icons/fa"

function Form(props) {
    return (
        <form className="form" onSubmit={props.addCourse}>
            <input type="text" minLength={1} placeholder="enter your task" value={props.space} onChange={props.updateCourse} />
            <button type="submit"><FaPlus/></button>
        </form>
    )
}

export default Form;
