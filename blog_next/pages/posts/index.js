import axios from "axios"
import AllPosts from "../../components/AllPosts"

export default function Posts({ posts }) {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
	const postsRes = await axios.get('http://localhost:1337/api/posts')

  return {
    props: {
      posts: postsRes.data.data,
    }
  }
}