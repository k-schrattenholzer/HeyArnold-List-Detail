import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import Character from "../../components/Characters/Character.jsx";
import { getCharacter } from "../../services/heyArnoldApi.js";

export default function CharacterDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(async () => {
    try {
      const char = await getCharacter(id);
      setCharacter(char);
      setLoading(false);

    } catch (e) {
      throw new Error(e.message)
    }
  }, [id]);

  const redirect = () => {
    history.push('/character-list');
  }

  return (
    <div>
    { loading ? 
      (<p>loading character</p>) : 
      ( <Character character={character}/> )
    }
      <button onClick={redirect}>back to list</button>
    </div>
  )
}
