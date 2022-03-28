import React from 'react';

const Link = (props) => {
    const {name, link} = props.routes;
    return (
        <div>
            <li className='mr-12'>
                <a href={link}>{name}</a>
            </li>
        </div>
    );
};

export default Link;