import React from 'react';
import { MdOutlineNoFood } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    const {strMeal, strMealThumb, idMeal} = meal;
    let navigate = useNavigate();
    const showDetails = () =>{
        navigate(`/meals/${idMeal}`)
    }
    return (
        <div className='border border-teal-500 rounded-xl p-2 bg-teal-100'>
            <img className='w-full rounded-t-xl mb-2' src={strMealThumb} alt="" />
            <div className='flex justify-between'>
            <p className='text-2xl text-amber-600'>{strMeal}</p>
            <button onClick={showDetails} className='text-2xl bg-red-600 rounded-xl text-white p-2'><MdOutlineNoFood /></button>
            </div>
        </div>
    );
};

export default Meal;