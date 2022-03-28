import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptins = [
        {id: 1, name: 'Free', price: 22.00, benrits: [
            'liner', 'free', 'icons', 'unlimetid', 'localzed deals',
            'fantastict', 'crazy', 'awsoms',
        ]},
        {id: 2, name: 'Renular', price: 9.90, benrits: [
            'liner', 'free', 'icons', 'unlimetid', 'localzed deals',
            'fantastict', 'crazy', 'awsoms',
        ]},
        {id: 3, name: 'Preminum', price: 19.99, benrits: [
            'liner', 'free', 'icons', 'unlimetid', 'localzed deals',
            'fantastict', 'crazy', 'awsoms',
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-5xl font-mono text-white'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus itaque ipsa beatae. Voluptatem, alias asperiores? At et quidem architecto nostrum?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptins.map(optins=> <PricingOption key={optins.id} optins={optins}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;