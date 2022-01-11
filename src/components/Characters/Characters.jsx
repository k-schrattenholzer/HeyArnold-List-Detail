import { Link } from "react-router-dom";
import styles from './Characters.css'

export default function Characters({ characterList }) {
  return(

    <div className={styles.characterListEl}>
    {characterList.map((char) => 
      <li className={styles.imageContainer} key={char._id}>
        <Link to={`/character-detail/${char._id}`}>
          <img src={char.image} alt={char.name} className={styles.imageEl} />
        </Link>
        
      </li>
    )
    }
    </div>
  )
}
