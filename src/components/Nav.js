import React from "react"
const Nav = ({length}) => {

    return (
        <nav>
            <ul>
                <li>Youngprinnce</li>
                <li>List of movies: {length}</li>
            </ul>
        </nav>
    )
}


export default Nav