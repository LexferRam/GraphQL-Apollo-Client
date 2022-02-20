import {useQuery, gql} from '@apollo/client'

const GET_CHARACTER = gql`
# ID! ==> tipo ID y 1 sig. que es obligatorio para que funcione el query
    query GetCharacter($id: ID! ){
        character(id: $id) {
            name
            id
            image
            episode{
                id
                name
                episode
            }
        }
    }
`

export const useCharacter = (id) => {

    const {data, loading, error} = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return{
        data,
        loading, 
        error
    }

}