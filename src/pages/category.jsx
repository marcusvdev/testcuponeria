import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

function Category({data}) {
  return (
    <Layout>
      <Header />
      <section className="page">
        <div className="grid">
            <div className="page__title">
                <h2>Roupas</h2>
                <select
                  className="dropwdown-filter"
                    onChange={(e) => {console.log(e.target.value)}}
                    >
                    <option value="">ordernar por</option>
                    <option value="min-price">menor preço</option>
                    <option value="az">a - z</option>
                    <option value="recent">mais recentes</option>
                </select>
            </div>
            <div className="products">
                {data?.slice(0, 6).map((product, id) => (
                    <div className="product" key={id}>
                      <Image className="product__thumb" src={product.image} alt={product.title} width={328} height={203} />
                      <span className="product__content">
                        <p className="product__name">{product.title}</p>
                        <p className="product__price">R$ {product.price}</p>
                        <Link href={'/product?ID='+product.id}>
                          <a className="btn-primary">ver produto</a>
                        </Link>
                      </span>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
  const data = await res.json()
  return {
      props: {
          data,
      },
  }
}

export default Category