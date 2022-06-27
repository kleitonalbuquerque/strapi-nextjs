import { useEffect, useState } from "react"
import PostPreview from "./PostPreview"

export default function HomeLatestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5))
  }, [posts])

  function renderPostPreviews() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />
    })
  }

  return (
    <>
      <h2>Latest Posts</h2>
      {renderPostPreviews()}
    </>
  )
}
