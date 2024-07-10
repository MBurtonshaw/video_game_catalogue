import { React, useState, useEffect } from 'react';
import genre from '../games.json';

export default function GenresPage() {

    const [genres, setGenres] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    async function getData() {
        // fetch('http://localhost:5000/', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (myJson) {
                setGenres(genre.genre);
            // });
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setGenres])

    function lister() {
        if (genres !== '') {
            return (
                genres.map((item, i) =>
                    <div key={i} className='col m-auto genres_border p-5'>
                        <a className='nonchalant text-white w-100 m-auto' href={item.url}>
                            <p className='fs-2'>{item.name}</p>
                        </a>
                    </div>
                )
            )
        }
    }

    if (isLoading === true) {
        return null;
    }
    if (genres !== '') {
        return (
            <div id='GenresPage' className='mt-5 pt-5'>
                <h1 className='mt-5'>Find by Genre</h1>
                <div className='row align-items-center mt-5 p-1 w-75 mx-auto genre_container_border'>
                    {lister()}
                </div>
            </div>
        );
    }
}