import { Link } from "react-router-dom"
import { useCharacters } from "../hooks/useCharacters"
import "./Characterlist.css"

export const CharactersList = () => {

    const {data, loading, error} = useCharacters()

    if (loading) return <div>Loading...</div>
    if(error) return <div>Something went wrong</div>

  return (
    <div className="Characterlist">
        {data.characters.results.map(character => (
            <Link to={`/${character.id}`}>
                <div key={character.id}>
                    <img src={character.image}/>
                    <h2>{character.name}</h2>
                </div>
            </Link>
        ))}
    </div>
  )
}
