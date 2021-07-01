import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DateCard from '../src/components/Date/components/DateCard'

const Home = () => {
  return(
    <div>
      <h2>CountDown</h2>
      <DateCard/>
    </div>
  )
}







export default Home;