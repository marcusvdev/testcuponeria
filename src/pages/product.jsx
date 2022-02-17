import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

function Product({data}) {

  // const router = useRouter();
  // const { ID } = router.query;
  // const [product, setProduct] = useState({});
  // const productUrl = `https://fakestoreapi.com/products/${ID}`
  
  // useEffect(()=>{
  //   let fetchProduct = async () => {
  //     const res = await fetch(productUrl);
  //     const {data} = await res.json();
  //     setProduct(data)
  //   }
  //   fetchProduct()
  // }, []);

  return (
    <Layout>
      <Header />
      <section className="page">
        <div className="grid">
          <div className="page-product">
          <div className="page-product__image">
            <Image src={data.image} alt={data.title} width={500} height={310} />
          </div>
          <div className="page-product__content">
            <h2>{data.title}</h2>
            <p className="price">R${data.price}</p>
            <p className="description">{data.description}</p>
            <Link href={'/checkout'}>
              <a className="btn-primary">Adicionar ao carrinho</a>
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

export default Product