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