function Blog({ data }) {
    return (
        <ul>
        {data.map((post, id) => (
            <li key={id}>{post.title}</li>
        ))}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}

export default Blog