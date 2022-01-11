import { useEffect, useState } from "react"
import { getCharacters } from "../../services/heyArnoldApi.js"
import styles from "./CharacterList.css"


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
    <div className={styles.characterListContainer}>

      <div>
        <h1>this is the character list</h1>
        <p>click on a character to get more information</p>
        </div>

      {loading ? <p>loading up</p> : <p>all loaded</p>
      }

      <div className={styles.characterListEl}>
      {characterList.map((char) => 
        <li className={styles.imageContainer} key={char._id}>
          <a href={`/character-detail/${char._id}`}>
            <img src={char.image} alt={char.name} className={styles.imageEl} />
          </a>
          
        </li>
      )
      }
      </div>
      
    </div>
  )
}
