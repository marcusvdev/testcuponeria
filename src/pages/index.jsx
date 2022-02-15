import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Suggestions from '../components/suggestions'
import styles from '../styles/Home.module.css'

export default function Home() {
  //return null;
  return (
    <Layout>
      <Header />
      <Suggestions />
      <Footer />
    </Layout>
  )
}