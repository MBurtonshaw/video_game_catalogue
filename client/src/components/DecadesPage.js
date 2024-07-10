import { React } from 'react';

export default function DecadesPage() {

    return (
        <div id='DecadesPage' className='mt-5 pt-5'>
            <h1 className='mt-5'>Find by Decade</h1>
            <div className=' mt-5 pt-2 w-25 m-auto'>
          
                <div className='row decades_border my-5'>
                    <a className='nonchalant' href='/decades/80s'>
                        <h1>80s</h1>
                    </a>
                </div>
                <div className='row decades_border my-5'>
                    <a className='nonchalant' href='/decades/90s'>
                        <h1>90s</h1>
                    </a>
                </div>
                <div className='row decades_border my-5'>
                    <a className='nonchalant' href='/decades/00s'>
                        <h1>00s</h1>
                    </a>
                </div>
  
            </div>
        </div>
    );

}