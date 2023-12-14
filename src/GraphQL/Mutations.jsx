import { gql } from "@apollo/client";

export const ADD_RECIPE = gql`
  mutation addRecipe($title: String!, $description: String!, $ingredients: String!, $bakingTime: String!, $instructions: String!, $notes: String!, $source: String!) {
    addRecipe(recipe: {
      title: $title,
      description: $description,
      ingredients: $ingredients,
      bakingTime: $bakingTime,
      instructions: $instructions,
      notes: $notes,
      source: $source
    }) {
      id
      title
      description
      ingredients
      bakingTime
      instructions
      notes
      source
    }
  }
`;

export const DELETE_RECIPE = gql`
    mutation deleteRecipe($id: Int!) {
        deleteRecipe(id: $id) {
        id
        }
    }
`;

export const UPDATE_RECIPE = gql`
    mutation updateRecipe($id: Int!, $title: String!, $description: String!, $ingredients: String!, $bakingTime: String!, $instructions: String!, $notes: String!, $source: String!) {
        updateRecipe(recipe: {
            id: $id, 
            title: $title,
            description: $description,
            ingredients: $ingredients,
            bakingTime: $bakingTime,
            instructions: $instructions,
            notes: $notes,
            source: $source
        }) {
            id
            title
            description
            ingredients
            bakingTime
            instructions
            notes
            source
        }
    }
`;