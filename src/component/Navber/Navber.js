import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navber = () => {
    const [opne, setOpne] = useState(false);

    const routes = [
        {id: 1, name: 'Home', link: '/hone'},
        {id: 2, name: 'Shop', link: '/shop'},
        {id: 3, name: 'Deals', link: '/deals'},
        {id: 4, name: 'Conpons', link: '/conpons'},
        {id: 4, name: 'Contact', link: '/ontact'},
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=> setOpne(!opne)} className='w-9 h-9 p-1 md:hidden'>
                {opne ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 absolute md:static w-full duration-500 ease-in ${opne ? 'top-6': 'top-[-150px]'}`}>
                {
                    routes.map(routes => <Link key={routes.id} routes={routes}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;