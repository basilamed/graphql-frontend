import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { GET_RECIPE } from '../GraphQL/Queries';
import { UPDATE_RECIPE } from '../GraphQL/Mutations';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

function UpdateRecipe() {

  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id: recipeId },
  });
  console.log(recipeId)

  const [updateRecipe] = useMutation(UPDATE_RECIPE);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [bakingTime, setBakingTime] = useState('');
  const [source, setSource] = useState('');
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (data && data.recipe) {
      const { title, ingredients, description, bakingTime, source, instructions, notes } = data.recipe;
      setTitle(title);
      setIngredients(ingredients);
      setDescription(description);
      setBakingTime(bakingTime);
      setSource(source);
      setInstructions(instructions);
      setNotes(notes);
    }
  }, [data]);

  const handleUpdate = () => {
    updateRecipe({
      variables: {
        id: recipeId,
        title,
        ingredients,
        description,
        bakingTime,
        source,
        instructions,
        notes,
      },
    }).then(() => {
      // Handle successful update, e.g., redirect to recipe list page
      console.log('Recipe updated successfully!');
      var success = document.getElementById("success");
      var form = document.getElementById("form");
        success.style.display = "block";
        success.style.color = "green";
        success.style.backgroundColor = "lightgreen";
        success.style.padding = "10px";
        success.style.borderRadius = "5px";
        form.style.marginTop = "20px";
        form.style.marginBottom = "10px";
        setTimeout(function(){ success.style.display = "none"; }, 3000);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="add-recipe-form" id='form'>
        <div id="success">Recipe updated successfully!</div>
        <h1>UPDATE RECIPE</h1>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Baking Time" value={bakingTime} onChange={(e) => setBakingTime(e.target.value)} />
        <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
        <input type="text" placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <input type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button onClick={handleUpdate}>Update Recipe</button>
        <button><Link to={`/`} id='link'>Back</Link></button>
    </div>
  );
}

export default UpdateRecipe;