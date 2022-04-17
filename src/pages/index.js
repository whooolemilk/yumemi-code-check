import Title from '../components/Atoms/Title';
import styles from '../styles/Home.module.css';
import Graph from '../components/Organisms/Graph';
export default function Home() {
  return (
    <div className={styles.container}>
      <Title />
      <Graph />
    </div>
  );
}
