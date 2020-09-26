const virtual = [{
            name: "Harry Potter",
            price: "$50",
            id:1
        },
         {
            name: "Game of Throne",
            price: "$90",
            id:2
        },
          {
            name: "Money Heist",
            price: "$70",
            id:3
        },
           {
            name: "Silicon Valley",
            price: "$30",
            id:4
        },
            {
            name: "Elite",
            price: "$10",
            id:5
        },
            {
            name: "Merlin",
            price: "$40",
            id:6
        },]

const movies = (movies = virtual, action) => {
    switch (action.type) {
        case "ADDMOVIE":
            return [...movies, action.payload]
        default:
            return movies
    }
}

export default movies