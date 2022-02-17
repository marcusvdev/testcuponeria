import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

function Checkout() {
  return (
    <Layout>
      <Header />
      <section className="page">
        <div className="grid">
            <div className="page__title">
                <h2>Carrinho</h2>
            </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default Checkout