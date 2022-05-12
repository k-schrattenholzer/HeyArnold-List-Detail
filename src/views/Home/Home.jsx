import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div >
      <h1>Welcome to the Hey Arnold Character Gallery</h1>
      <Link to='/character-list'>View All Characters</Link>
    </div>
  )
}
