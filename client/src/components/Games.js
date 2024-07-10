import { React, useState, useEffect } from 'react';
import Loading from './Loading';
import titles from '../games.json';

export default function Games() {

    const [games, setGames] = useState('');
    const [nes, setNes] = useState('');
    const [snes, setSnes] = useState('');
    const [n64, setN64] = useState('');
    const [gameCube, setGameCube] = useState('');
    const [dreamcast, setDreamcast] = useState('');
    const [genesis, setGenesis] = useState('');
    const [playstation, setPlaystation] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    async function getData() {
        // fetch('http://localhost:5000/games', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         setNes(myJson.Nintendo.NES);
        //         setSnes(myJson.Nintendo.SNES);
        //         setN64(myJson.Nintendo.N64);
        //         setGameCube(myJson.Nintendo.GameCube);
        //         setDreamcast(myJson.Sega.Dreamcast);
        //         setGenesis(myJson.Sega.Genesis);
        //         setPlaystation(myJson.Sony.Playstation);
        //         setGames(myJson);
        //     });
        setNes(titles.titles.Nintendo.NES);
        setSnes(titles.titles.Nintendo.SNES);
        setN64(titles.titles.Nintendo.N64);
        setGameCube(titles.titles.Nintendo.GameCube);
        setDreamcast(titles.titles.Sega.Dreamcast);
        setGenesis(titles.titles.Sega.Genesis);
        setPlaystation(titles.titles.Sony.Playstation);
        setGames(titles.titles);
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setGames])

    function lister(group) {
        if (group.length < 1) {
            return null
        }
        if (group === nes) {
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb nes_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === snes) {
            if (window.innerWidth < 768) {
                return (
                    group.map(
                        (item, i) =>
                            <div key={i} className='col py-3'>
                                <a href={item.url}>
                                    <img name={item.name} className='smaller_img game_thumb snes_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                                </a>
                                <a href={item.url}>
                                    <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                                </a>
                            </div>
                    )
                );
            }
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb snes_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === genesis) {
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb genesis_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === n64) {
            if (window.innerWidth < 768) {
                return (
                    group.map(
                        (item, i) =>
                            <div key={i} className='col py-3'>
                                <a href={item.url}>
                                    <img name={item.name} className='smaller_img game_thumb n64_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                                </a>
                                <a href={item.url}>
                                    <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                                </a>
                            </div>
                    )
                );
            }
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb n64_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === playstation) {
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb playstation_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === dreamcast) {
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb dreamcast_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
        if (group === gameCube) {
            return (
                group.map(
                    (item, i) =>
                        <div key={i} className='col py-3 px-5'>
                            <a href={item.url}>
                                <img name={item.name} className='smaller_img game_thumb gamecube_bg' src={`../img/${item.photo}`} alt={`box art for ${item.name}`} />
                            </a>
                            <a href={item.url}>
                                <label className='w-100 m-auto label_font' htmlFor={item.name}>{item.name}</label>
                            </a>
                        </div>
                )
            );
        }
    }

    if (isLoading === true) {
        return (
            <div id='Games' className='text-center'>
                <Loading />
            </div>
        );
    }
    if (window.innerWidth < 768) {
        return (
            <div id='Games' className='text-center'>
                <div id='nes_div' className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/nes/nes.jpg' alt='logo for the NES'/>
                    <div className='row align-items-start w-100 m-auto px-5'>
                        {lister(nes)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/genesis/genesis.jpg' alt='logo for the Genesis'/>
                    <div className='row align-items-start w-100 m-auto px-5'>
                        {lister(genesis)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/snes/snes.jpg' alt='logo for the SNES' />
                    <div className='row align-items-start w-100 m-auto'>
                        {lister(snes)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/playstation/playstation.jpg' alt='logo for the Playstation' />
                    <div className='row align-items-start w-100 m-auto px-5'>
                        {lister(playstation)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/n64/n64.jpg' alt='logo for the N64' />
                    <div className='row align-items-start w-100 m-auto'>
                        {lister(n64)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/dreamcast/dreamcast.jpg' alt='logo for the Dreamcast' />
                    <div className='row align-items-start w-100 m-auto px-5'>
                        {lister(dreamcast)}
                    </div>
                </div>
                <div className='mt-5 py-5 pt-0 system_div'>
                    <img className='header_img py-5 mt-5' src='../img/gamecube/gamecube.jpg' alt='logo for the GameCube' />
                    <div className='row align-items-start w-100 m-auto px-5'>
                        {lister(gameCube)}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div id='Games' className='text-center'>
            <div id='nes_div' className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/nes/nes.jpg' alt='logo for the NES' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(nes)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/genesis/genesis.jpg' alt='logo for the Genesis' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(genesis)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/snes/snes.jpg' alt='logo for the SNES' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(snes)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/playstation/playstation.jpg' alt='logo for the Playstation' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(playstation)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/n64/n64.jpg' alt='logo for the N64' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(n64)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/dreamcast/dreamcast.jpg' alt='logo for the Dreamcast' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(dreamcast)}
                </div>
            </div>
            <div className='mt-5 py-5 pt-0 system_div'>
                <img className='header_img py-5 mt-5' src='../img/gamecube/gamecube.jpg' alt='logo for the GameCube' />
                <div className='row align-items-start w-100 m-auto px-5'>
                    {lister(gameCube)}
                </div>
            </div>
        </div>
    );

}