import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='flex gap-6 justify-end p-6 bg-teal-600 text-white mb-6 font-semibold'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/meals'>Meals</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
        </div>
    );
};

export default Header;