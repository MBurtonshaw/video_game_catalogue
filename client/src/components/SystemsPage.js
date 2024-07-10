import { React, useState, useEffect } from 'react';
import Loading from './Loading';
import system from '../games.json';

export default function SystemsPage() {

    const [systems, setSystems] = useState('');
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
                setSystems(system.systems);
            // });
        setIsLoading(false);
    }

    useEffect(() => { getData() }, [setSystems])


    if (isLoading === true) {
        return (
            <div id='Games' className='text-center'>
                <Loading />
            </div>
        );
    }
    if (systems !== '') {
        return (
            <div id='Systems' className='text-center mt-5 pt-5 mx-auto px-5 row w-100'>
                <h1 className=''>Find by System</h1>
                {systems.map(
                    (item, i) =>
                        <div key={i} className='col py-3 mt-5'>
                            <a href={item.url}>
                            <img className='smallerer_img systems_border' src={`../img/${item.photo}`} />
                                <label className='w-100 fs-4 text-white nonchalant'>{item.name}</label>
                            </a>
                        </div>
                )}
            </div>
        );
    }
}