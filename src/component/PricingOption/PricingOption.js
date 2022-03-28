import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benrits} = props.optins;
    return (
        <div className='bg-white p-5 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 text-2xl font-bold rounded-sm'>{name}</h2>
            <p>
                <span className='text-5xl font-bold '>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benrits: </h3>
                {
                    benrits.map(benrits=> <Benefit benrits={benrits}></Benefit>)
                }
            </div>
            <button className='bg-green-500 px-4 py-2 mt-2 flex rounded-md justify-center w-full text-white font-bold'>Buy Now <ArrowRightIcon className='w-6 h-6 mx-2'></ArrowRightIcon></button>
        </div>
    );
};

export default PricingOption;