import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
      console.log(error.message)
    }
  }, [])

  return (
    <div className={styles.characterListContainer}>

      <div>
        <h1>this is the character list</h1>
        <p>click on a character to get more information</p>
        <Link to='/'>home</Link>
      </div>

      {loading ? <p>loading up</p> : <Characters characterList={characterList}/>
      }

      
    </div>
  )
}
