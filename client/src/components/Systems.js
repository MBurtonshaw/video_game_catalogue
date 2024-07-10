import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import titles from '../games.json';

export default function Systems() {

    const [games, setGames] = useState('');
    const [header, setHeader] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    let { id } = useParams();

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
                let nes_games = titles.titles.Nintendo.NES;
                let snes_games = titles.titles.Nintendo.SNES;
                let n64_games = titles.titles.Nintendo.N64;
                let gamecube_games = titles.titles.Nintendo.GameCube;
                let genesis_games = titles.titles.Sega.Genesis;
                let dreamcast_games = titles.titles.Sega.Dreamcast;
                let playstation_games = titles.titles.Sony.Playstation;
                if (id === 'nes') {
                    setGames(nes_games);
                    setHeader('Nintendo Entertainment System');
                }
                if (id === 'snes') {
                    setGames(snes_games);
                    setHeader('Super Nintendo Entertainment System');
                }
                if (id === 'n64') {
                    setGames(n64_games);
                    setHeader('Nintendo 64');
                }
                if (id === 'gamecube') {
                    setGames(gamecube_games);
                    setHeader('Nintendo GameCube');
                }
                if (id === 'genesis') {
                    setGames(genesis_games);
                    setHeader('Sega Genesis');
                }
                if (id === 'dreamcast') {
                    setGames(dreamcast_games);
                    setHeader('Sega Dreamcast');
                }
                if (id === 'playstation') {
                    setGames(playstation_games);
                    setHeader('Sony Playstation');
                }
            // });
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setGames])


    if (isLoading === true) {
        return (
            <div id='Games' className='text-center'>
                <Loading />
            </div>
        );
    }
    if (games !== '') {
        return (
            <div id='Systems' className='text-center my-5 py-5 mx-auto px-5 row w-75'>
                <h1 className=''>{header}</h1>
                <div className='mt-5 row'>
                    {games.map(
                        (item, i) => {
                            return (
                                <div key={i} className='col p-4'>
                                    <a className='nonchalant text-white' href={`/${item.url}`}>
                                    <img className='smaller_img' src={`../img/${item.photo}`} />
                                    <label className='w-100'>{item.name}</label>
                                    </a>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}