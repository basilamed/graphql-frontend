import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
    query{
        allRecipes{
            id,
            title,
            ingredients,
            description,
            bakingTime,
            source,
            instructions,
            notes
        }
    }
`;
export const GET_RECIPE = gql`
    query($id: Int!){
        recipe(id: $id){
            id,
            title,
            ingredients,
            description,
            bakingTime,
            source,
            instructions,
            notes
        }
    }
`;