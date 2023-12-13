import { React, useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { ADD_RECIPE } from '../GraphQL/Mutations';
import '../App.css';

function AddRecipe() {

    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const [bakingTime, setBakingTime] = useState("");
    const [source, setSource] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");

    const [addRecipe, { error }] = useMutation(ADD_RECIPE);

    const addR = () => {
        const nesto = addRecipe({
            variables: {
                    title: title,
                    ingredients: ingredients,
                    description: description,
                    bakingTime: bakingTime,
                    source: source,
                    instructions: instructions,
                    notes: notes
            }
        });

        if (nesto) {
            window.location.reload();
        }
        
        if (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="add-recipe-form">
                <h1>ADD NEW RECIPE</h1>
                <input type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
                <input type="text" placeholder="Ingredients" onChange={(e) => {setIngredients(e.target.value)}} />
                <input type="text" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} />
                <input type="text" placeholder="Baking Time" onChange={(e) => {setBakingTime(e.target.value)}} />
                <input type="text" placeholder="Source" onChange={(e) => {setSource(e.target.value)}} />
                <input type="text" placeholder="Instructions" onChange={(e) => {setInstructions(e.target.value)}} />
                <input type="text" placeholder="Notes" onChange={(e) => {setNotes(e.target.value)}} />
                <button onClick={addR}>Add Recipe</button>
            </div>
        </>
    );
}

export default AddRecipe;
