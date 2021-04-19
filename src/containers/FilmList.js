import React from "react";
import { findDOMNode } from "react-dom";
import Film from "./Film";

const FilmList = ({films}) => {

    const FilmNodes = films.map((film) => {
    return (
        < Film name = {film.name} url={film.url} key={film.id}/>
    )
})

return (
    <>
    {FilmNodes}
    </>
)
}




export default FilmList;

