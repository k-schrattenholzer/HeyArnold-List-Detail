export default function Character({ character }) {
  return (
    <section>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>id:{character._id}</p>
    </section>
  )
}