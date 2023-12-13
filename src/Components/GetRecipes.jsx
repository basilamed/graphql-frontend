import { React, useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_ALL_RECIPES } from '../GraphQL/Queries';
import { DELETE_RECIPE } from '../GraphQL/Mutations';
import '../App.css';


function GetRecipes() {
    const { loading, error, data } = useQuery(GET_ALL_RECIPES);
    const [recipes, setRecipes] = useState([]);
    const [deleteRecipe, { error2 }] = useMutation(DELETE_RECIPE);

    const deleteR  = async (id) => {
        const nesto = deleteRecipe({
            variables: {
                id: id
            }
        });

        if (nesto) {
            window.location.reload();
        }

        if (error2) {
            console.log(error2);
        }
    }
    

    useEffect(() => {
        if (data) {
            console.log(data);
            setRecipes(data.allRecipes);
        }
    }, [data]);

  return (
    <>
        <div className="container">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-container">
                    <h1>{recipe.title}</h1>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.description}</p>
                    <p>{recipe.bakingTime}</p>
                    <p>{recipe.source}</p>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.notes}</p>
                    <button onClick={() => deleteR(recipe.id)}>Delete</button>
                </div>
            ))}
        </div>
    </>
  );
}

export default GetRecipes;
