import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { AiFillLike } from "react-icons/ai";
import LazyLoad from 'react-lazyload';

const ChefRecipe = () => {
    const data = useLoaderData();

    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, numberOfLikes, shortBio, recipes } = data;
    return (
        <div>
            <h1 className="text-center text-3xl font-bold m-10">Chef Details</h1>
            <div className='flex flex-col justify-around gap-4 lg:flex-row p-4'>
                <div className='m-16 w-3/5'>
                    <p className='text-2xl font-bold mb-5'>{chefName}</p>
                    <p className='font-bold mb-4'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                    <p className='font-bold mb-4'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} recipes</span></p>
                    <p className='font-bold'>Bio : <span className='font-normal'>{shortBio}</span></p>
                    <p className='font-bold flex mt-5 '><AiFillLike className='h-6 w-6 mx-2' />{numberOfLikes} Likes</p>
                </div>
                <div><LazyLoad threshold={.90} height={762}><img className='w-full object-cover object-center rounded-r-xl' src={chefPicture} alt="" /></LazyLoad></div>
            </div>
            <p className='text-3xl font-bold text-center mt-16 mb-10'>{chefName} Recipes</p>
            <div className="grid grid-cols-1 gap-4 my-10">


                {
                    recipes.map(recipe => <Recipe
                        recipe={recipe}
                        key={recipe.id}
                    ></Recipe>)
                }
            </div>

        </div>
    );

};

export default ChefRecipe;