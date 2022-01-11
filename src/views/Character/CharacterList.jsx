import { useEffect, useState } from "react"
import Characters from "../../components/Characters/Characters.jsx";
import { getCharacters } from "../../services/heyArnoldApi.js"
import styles from '../../App.css'

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characterList, setCharacters] = useState([]);

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

      {loading ? <p>loading up</p> : <Characters characterList={characterList}/>
      }

      
    </div>
  )
}
