import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-yellow-500 mb-4'>Page Not Found <span className='text-red-600'>(404)</span></h1>
            <h3 className='text-3xl text-green-500'>The Page You Are Looking For Is Not Here...</h3>
        </div>
    );
};

export default NotFound;