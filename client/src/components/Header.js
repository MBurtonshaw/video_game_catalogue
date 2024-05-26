import { React } from 'react';

export default function Header() {
    if (window.location.pathname === '/') {
        if (window.innerWidth < 992) {
            return (
                <div id='Header' className='w-75 row text-center mt-5 mx-auto'>
                    <a className='w-100 header_item_2 mx-auto' href='/'>Home</a>
                    <a className='w-100 header_item_2 mx-auto' href='/games'>All Games</a>
                    <a className='w-100 header_item_2 mx-auto' href='/systems'>Systems</a>
                    <a className='w-100 header_item_2 mx-auto' href='/genres'>Genres</a>
                    <a className='w-100 header_item_2 mx-auto' href='/decades'>Decades</a>
                </div>
            );
        }
        return (
            <div id='Header' className='w-25 row text-center mt-5 mx-auto'>
                <a className='w-100 header_item_2 mx-auto' href='/'>Home</a>
                <a className='w-100 header_item_2 mx-auto' href='/games'>All Games</a>
                <a className='w-100 header_item_2 mx-auto' href='/systems'>Systems</a>
                <a className='w-100 header_item_2 mx-auto' href='/genres'>Genres</a>
                <a className='w-100 header_item_2 mx-auto' href='/decades'>Decades</a>
            </div>
        );
    } else {
        if (window.innerWidth < 992) {
            return (
                <div id="Header" class="dropdown w-100">
                    <button className="header_dropdown dropdown-toggle w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul class="dropdown-menu header_item text-center w-75">
                        <li><a class="dropdown-item" href="/">Home</a></li>
                        <li><a class="dropdown-item" href="/games">All Games</a></li>
                        <li><a class="dropdown-item" href="/systems">Systems</a></li>
                        <li><a class="dropdown-item" href="/genres">Genres</a></li>
                        <li><a class="dropdown-item" href="/decades">Decades</a></li>
                    </ul>
                </div>
            );
        }
        return (
            <div id='Header' className='w-100 row text-center'>
                <a className='col header_item' href='/'>Home</a>
                <a className='col header_item' href='/games'>All Games</a>
                <a className='col header_item' href='/systems'>Systems</a>
                <a className='col header_item' href='/genres'>Genres</a>
                <a className='col header_item' href='/decades'>Decades</a>
            </div>
        );
    }
}



