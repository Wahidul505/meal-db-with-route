import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])
    const mealSearch = e =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-cyan-600 mb-4'>Search Your Meal</h1>
            <input onChange={mealSearch} className='border border-gray-400 rounded p-1' type="search" name="" id="" placeholder='Enter a Meal' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
                {
                    meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;