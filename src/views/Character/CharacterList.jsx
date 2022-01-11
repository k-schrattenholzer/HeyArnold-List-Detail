import { handleRequest } from "msw";
import { useEffect, useState } from "react"
import { getCharacters } from "../../services/heyArnoldApi.js"


export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characterList, setCharacters] = useState([]);

  console.log(characterList);

  useEffect(async () => {
    try {
      const res = await getCharacters();
      setCharacters(res);
      setLoading(false);
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  return (
    <div>
      <h1>this is the character list</h1>
      {loading ? <p>loading up</p> : <p>all loaded</p>
      }
      <ul>
      {characterList.map((char) => 
        <li>
          {char.name}
          <img src={char.image} alt={char.name} />
        </li>
      )
      }
      </ul>
      
    </div>
  )
}
