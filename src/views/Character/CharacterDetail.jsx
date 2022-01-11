import { useState } from "react";
import { useParams } from "react-router-dom"

export default function CharacterDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  return (
    <div>
      This is the detail page for a character with ID of {id}
    </div>
  )
}
