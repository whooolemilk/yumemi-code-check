import Image from 'next/image';
import styles from '../../styles/Title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <Image
            src='/../public/kkrn_icon_graph_1.png'
            alt='graph'
            width={50}
            height={50}
          />
        </div>
        <p className={styles.subtitle}>Graph</p>
        <h1 className={styles.title}>都道府県別の総人口推移グラフ</h1>;
      </div>
    </div>
  );
};

export default Title;
