import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

function Checkout({data}) {
  
  const [count, setCount] = React.useState(1);
  const inc = (event) => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  }
  const updatedValue = data.price * count;

  return (
    <Layout>
      <Header />
      <section className="page">
        <div className="grid">
            <div className="page__title">
                <h2>Carrinho</h2>
            </div>
            <div className="checkout-content">
              <div className="checkout-content__products">
                <div className="checkout-product">
                  <Image src={data.image} alt={data.title} width={145} height={90} />
                  <p className="checkout-product__title">{data.title}</p>
                  <div className="qtd">
                    <button onClick={dec}>-</button>
                    <input type="number" value={count} onChange={(e) => {}} />
                    <button onClick={inc}>+</button>
                  </div>
                  <p className="checkout-product__value">R${data.price}</p>
                </div>
              </div>
              <div className="checkout-content__total">
                <p>Total: R${updatedValue}</p>
                <Link href={'/checkout'}>
                  <a className="btn-primary">Continuar</a>
                </Link>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products/16')
  const data = await res.json()
  return {
      props: {
          data,
      },
  }
}

export default Checkout