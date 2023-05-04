import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import LazyLoad from 'react-lazyload';

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, yearOfExperience, numberOfRecipes, numberOfLikes } = chef

    return (
        <>
            <div className="w-80 h-full mx-4 my-4">
                <Link href="#" className="cursor-pointer block">
                    <figure className="rounded-lg overflow-hidden">

                        <img className="h-64 w-full object-cover" src={chefPicture} alt="Example" />
                    </LazyLoad>
                    <figcaption className="p-4 bg-white ">
                        <h2 className="text-lg font-bold mb-4 leading-tight text-gray-800">{chefName}</h2>
                        <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearOfExperience} years</span></p>
                        <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} Recipes</span></p>
                        <div className="mt-5 mb-0 flex justify-between items-center">
                            <p className='font-semibold'>Likes: <span className='font-normal'>{numberOfLikes}</span></p>
                            <Link to={`/chefRecipe/${id}`}><button className="bg-btn-color py-2 px-4 rounded-md font-semibold flex items-center">View Recipes<FaChevronCircleRight className='h-5 w-5 ml-2' /></button></Link>
                        </div>
                    </figcaption>
                </figure>

            </Link>
        </div >
        </>
    );
};

export default ChefCard;