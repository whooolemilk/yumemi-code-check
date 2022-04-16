import Head from 'next/head';
import Image from 'next/image';
import CheckBox from '../components/Atoms/CheckBox';
import Title from '../components/Atoms/Title';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Title />
      <CheckBox name='Prefecture' />
    </>
  );
}
