import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import titles from '../games.json';
import genre from '../games.json';

export default function Genres() {

    const [games, setGames] = useState('');
    const [genres, setGenres] = useState('');
    const [filteredGames, setFilteredGames] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    let filtered_list = [];


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

                let genre_list = [];
                let nes = titles.titles.Nintendo.NES;
                let snes = titles.titles.Nintendo.SNES;
                let n64 = titles.titles.Nintendo.N64;
                let gamecube = titles.titles.Nintendo.GameCube;
                let genesis = titles.titles.Sega.Genesis;
                let dreamcast = titles.titles.Sega.Dreamcast;
                let playstation = titles.titles.Sony.Playstation;

                nes.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                snes.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                n64.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                gamecube.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                genesis.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                dreamcast.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });

                playstation.forEach(item => {
                    if (item.genre.toLowerCase() === id.toLowerCase()) {
                        genre_list.push(item)
                    }
                });
                setGames(titles.titles);
                setGenres(genre.genre);
                setFilteredGames(genre_list);
            // });
        setIsLoading(false)

    }

    useEffect(() => { getData() }, [setIsLoading])

    if (isLoading === true) {
        return null
    }
    if (isLoading === false) {
        if (filteredGames !== '') {
            return (
                <div id='Genres' className='my-5 py-5 w-75 mx-auto'>
                    <h1 className='my-3'>{id}</h1>
                    <div className='row my-5'>
                        {filteredGames.map(
                            (item, i) =>
                                <div className='col mt-5 m-3'>
                                  
                                    <a className='nonchalant text-white' href={`/${item.url}`}>
                                        <img className='smaller_img genre_thumb' name={item.url} src={`../img/${item.photo}`} alt='' />
                                        <label htmlFor={item.url} className='w-100' key={i}>{item.name}</label>
                                    </a>
                               
                                </div>
                        )}
                    </div>
                </div>
            );
        }
    }
}