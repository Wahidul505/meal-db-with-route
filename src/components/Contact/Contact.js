import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-center gap-8 my-4'>
                <Link to={`/contact/social`}>Social</Link>
                <Link to={`/contact/hot-lines`}>Hot Lines</Link>
                <Link to={`/contact/info`}>Information</Link>
            </div>
            <hr className='border border-t-black mb-4' />
            <Outlet />
        </div>
    );
};

export default Contact;