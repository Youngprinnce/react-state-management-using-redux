export const increment = () => {
    return {
        type: "INCREMENT",
    }
}

export const decrement = () => {
    return {
        type:"DECREMENT",
    }
}

export const movieslength = () => {
    return {
        type:"LENGTH"
    }
}

export const addmovie = ({name, price,id}) => {
    return {
        type: "ADDMOVIE",
        payload:{name, price, id}
    }
}
