import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import titles from '../games.json';

export default function Decades() {

    const [games, setGames] = useState('');
    const [eighties, setEighties] = useState('');
    const [nineties, setNineties] = useState('');
    const [aughts, setAughts] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

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
                let eighties_array = [];
                let nineties_array = [];
                let aughts_array = [];

                let NES = titles.titles.Nintendo.NES;
                let SNES = titles.titles.Nintendo.SNES;
                let N64 = titles.titles.Nintendo.N64;
                let GameCube = titles.titles.Nintendo.GameCube;
                let Genesis = titles.titles.Sega.Genesis;
                let Dreamcast = titles.titles.Sega.Dreamcast;
                let Playstation = titles.titles.Sony.Playstation;

                setGames(titles.titles);

                NES.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                SNES.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                N64.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                GameCube.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                Genesis.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                Dreamcast.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                Playstation.forEach((item, i) => {
                    if (item.year > 1979 && item.year < 1989) {
                        eighties_array.push(item);
                    }
                    if (item.year > 1989 && item.year < 1999) {
                        nineties_array.push(item);
                    }
                    if (item.year > 1999 && item.year < 2009) {
                        aughts_array.push(item);
                    }
                });

                setEighties(eighties_array);
                setNineties(nineties_array);
                setAughts(aughts_array);
            // });

        setIsLoading(false);
    }

    //load data and sort it in async func
    //sort into different decades in state
    //match decade in state to url params




    useEffect(() => { getData() }, [setAughts])

    if (isLoading === true) {
        return ('');
    }
    if (games !== '') {
        if (id === '80s') {
            return (
                <div id='Decades' className='mt-5 pt-5 row w-75 mx-auto'>
                    {eighties.map((item, i) =>
                        <div key={i} className='col p-5'>
                            <a className='nonchalant' href={`/${item.url}`}>
                                <img className='smaller_img' name={item.url} src={`../img/${item.photo}`} />
                                <label className='w-100' htmlFor={item.url} >{item.name}</label>
                            </a>
                        </div>
                    )}
                </div>
            );
        }
        if (id === '90s') {
            return (
                <div id='Decades' className='mt-5 pt-5 row w-75 mx-auto'>
                    {nineties.map((item, i) =>
                        <div key={i} className='col p-5'>
                            <a className='nonchalant' href={`/${item.url}`}>
                                <img className='smaller_img' name={item.url} src={`../img/${item.photo}`} />
                                <label className='w-100' htmlFor={item.url} >{item.name}</label>
                            </a>
                        </div>
                    )}
                </div>
            );
        }
        if (id === '00s') {
            return (
                <div id='Decades' className='mt-5 pt-5 row w-75 mx-auto'>
                    {aughts.map((item, i) =>
                        <div key={i} className='col p-5'>
                            <a className='nonchalant' href={`/${item.url}`}>
                                <img className='smaller_img' name={item.url} src={`../img/${item.photo}`} />
                                <label className='w-100' htmlFor={item.url} >{item.name}</label>
                            </a>
                        </div>
                    )}
                </div>
            );
        }
    }
}