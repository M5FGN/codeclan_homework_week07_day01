import React from 'react';

const Film = ({name, url}) => {
    return (
        <>
        <p><a class='film' href={url}>{name}</a></p>
        </>
    )
}

export default Film;