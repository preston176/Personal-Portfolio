import React from 'react';
import services from '../services.js'

const Services = () => {
    return (
        <div >
            <h2 className='text-primary font-semibold text-3xl mt-14'>
                The services that I offer
            </h2>
            <div className='grid md:grid-cols-3 gap-5 my-8'>
                {
                    services.map((serv, i) => {
                        return (
                            <div key={i} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                                <img src={serv.image} alt="" />
                                <h5 className='text-primary font-semibold text-3xl mt-14'>{serv.title}</h5>
                                <p className='text-primary font-semibold text-lg'>
                                    {serv.description}
                                </p>
                            </div>
                        )
                    })


                }
            </div>

        </div>
    );
};

export default Services;