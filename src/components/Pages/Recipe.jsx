import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaHeart, FaStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (isFavorite) {
      toast(`"${recipeName}" is removed from your favorite recipes`);
    } else {
      toast(`"${recipeName}" is added to your favorite recipes`);
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="">
      <div className="flex items-center justify-around border rounded-xl shadow-md border-gray-300 my-4 w-11/12 mx-auto p-4">
        <div>
          <h1 className="text-3xl text-center font-bold">Recipe Name: {recipeName}</h1>
          <div className='flex items-center'>
            <div className='flex'>
              <p className="py-6 font-bold w-7/12 ml-7">Ingredients : <span className='font-normal'>
                {ingredients.map((ingredient, index) => (
                  <li key={recipe.id + index}>{ingredient}</li>
                ))
                }</span></p>
              <p className="py-6 font-bold w-11/12">Cooking Method: <span className='font-normal '>{cookingMethod.split('\n').map((step, index) => (
                <li key={index} className='my-2 list-none'>{step}</li>
              ))}</span></p>
            </div>
            <div style={{ height: '18vh' }} className='flex flex-col justify-between items-center ml-10'>
              <button onClick={handleFavorite}>
                <FaHeart
                  className={`h-6 w-6 ${isFavorite ? 'text-red-600' : 'text-gray-500'}`}
                />
              </button>
              <p className='flex items-center'>{rating}<FaStar className='h-6 w-6 mx-2' /></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Recipe;