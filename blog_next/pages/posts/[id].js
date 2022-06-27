import axios from "axios"
import MarkdownIt from "markdown-it"

export default function PostPage({ post }) {
  const md = new MarkdownIt({
    html: true
  })
  const htmlContent = md.render(post.attributes.content)

  return (
    <article>
      <header>
        <h1>{ post.attributes.title }</h1>
        <h2>{ post.attributes.description }</h2>
      </header>

      {/* Renderiza tags com markdown */}
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}>
      </section>
    </article>
  )
}

export async function getStaticProps({ params }) {
  const postRes = await axios.get(`http://localhost:1337/api/posts/${params.id}`)

  return {
    props: {
      post: postRes.data.data
    }
  }
}

export async function getStaticPaths() {
  const postsRes = await axios.get('http://localhost:1337/api/posts')
  console.log(postsRes)

  const paths = postsRes.data.data.map((post) => {
    return { params: {id: post.id.toString()} }
  })

  return {
    paths,
    fallback: false
  }
}