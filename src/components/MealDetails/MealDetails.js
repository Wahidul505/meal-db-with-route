import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({})
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions } = meal;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealId])
    return (
        <div className='flex justify-center'>
            <div className='w-3/5 p-6'>
                <img className='w-full mb-4' src={strMealThumb} alt="" />
                <h2 className='text-3xl mb-2'>{strMeal}</h2>
                <p className='text-lg mb-2'>{strInstructions? strInstructions: ''}</p>
                <p className='text-left'><small>Category: {strCategory ? strCategory: ''}</small></p>
                <p className='text-left'><small>Area: {strArea? strArea: ''}</small></p>
            </div>
        </div>
    );
};

export default MealDetails;