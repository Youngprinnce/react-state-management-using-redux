import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import {increment,decrement} from "./actions"
import './App.css';
import MovieList from "./components/MovieList"
import Nav from "./components/Nav"
import AddMovie from './components/AddMovie';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const movies = useSelector(state=>state.movieReducer)
  const dispatch = useDispatch()
  
  return (
    <div className="center">
      <h3>Counter {counter}</h3>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <Nav length={movies.length}/>
      <AddMovie movies={movies}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
