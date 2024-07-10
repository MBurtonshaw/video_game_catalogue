import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import titles from '../games.json';

export default function Title() {

    const [games, setGames] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();

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
                titles.titles.Nintendo.NES.forEach(
                    item => {
                        if (item.url.slice(10).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Nintendo.SNES.forEach(
                    item => {
                        if (item.url.slice(11).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Nintendo.N64.forEach(
                    item => {
                        if (item.url.slice(10).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Nintendo.GameCube.forEach(
                    item => {
                        if (item.url.slice(15).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Sega.Dreamcast.forEach(
                    item => {
                        if (item.url.slice(16).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Sega.Genesis.forEach(
                    item => {
                        if (item.url.slice(14).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
                titles.titles.Sony.Playstation.forEach(
                    item => {
                        if (item.url.slice(18).toLowerCase() === params.id) {
                            setGames(item)
                        }
                    }
                )
            // });
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setGames])

    function genre() {

        if (games.length === 0) {
            return null
        }
        return (
            <h4>{games.genre}</h4>
        )

    }

    function devPub() {
        if (games.length === 0) {
            return null
        }
        return (
            <h4>{games.developerPublisher}</h4>
        )
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
            <div className='text-center top_margin_mobile mx-5 row justify-content-center'>
                <div className='col'>
                    <img className='width_adjuster m-auto img_border p-1' src={`../../img/${games.photo}`} />
                </div>
                <div className='text_bg_2 m-5'>
                    <div className='col m-auto text_bg'>
                        <h1>{games.name}</h1>
                        <h4>{games.year}</h4>
                        {genre()}
                        {devPub()}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='text-center top_margin mx-5 row justify-content-center'>
            <div className='col'></div>
            <div className='col'>
               
                <img className='width_adjuster m-auto img_border' src={`../../img/${games.photo}`} />
           
            </div>
            <div className='text_bg_2 col m-auto'>
                <div className='text_bg'>
                    <h1>{games.name}</h1>
                    <h4>{games.year}</h4>
                    {genre()}
                    {devPub()}
                </div>
            </div>
            <div className='col'></div>
        </div>
    );
}