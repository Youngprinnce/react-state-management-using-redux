import React, { useState }from "react";
import { useDispatch } from "react-redux"
import {addmovie} from "../actions"

const AddMovie = ({movies}) => {
    const dispatch = useDispatch()


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const data = {
        name,
        price,
        id: movies.length + 1
    }


    const addMovie = (e) => {
        e.preventDefault();
        dispatch(addmovie(data))
    }


    return (
        <form onSubmit={addMovie}>
            <input type="text" placeholder="Movie TItle" value={name} onChange={updateName} />
            <input type="text" placeholder="Price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie