import { Link } from 'react-router-dom';
import styles from './Home.css';

export default function Home() {
  return (
    <div styles={styles.homeContainer}>
      <h1>Welcome to the Hey Arnold Character Gallery</h1>
      <Link to='/character-list'>View All Characters</Link>
    </div>
  )
}
