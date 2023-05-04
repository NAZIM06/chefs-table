import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { AiFillLike} from "react-icons/ai";

const ChefRecipe = () => {
    const data = useLoaderData();
    
    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes,numberOfLikes, shortBio, recipes} = data;
    return (
        <div>
        <div className='flex justify-between w-full bg-base-200 rounded-xl h-full'>
            <div className='m-16 w-5/12'>
                <p className='text-2xl font-bold mb-5'>{chefName}</p>
                <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} recipes</span></p>
                <p className='font-semibold'>Bio : <span className='font-normal'>{shortBio}</span></p>
                <p className='font-semibold flex mt-5 '><AiFillLike className='h-6 w-6 mx-2'/>{numberOfLikes} Likes</p>
            </div>
            <img className='w-2/6 rounded-r-xl' src={chefPicture} alt="" />
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