import PostPreview from "./PostPreview"

export default function AllPosts({ posts }) {

  function renderPostPreviews() {
    return posts.map((post) => {
      return <PostPreview post={post} key={post.id} />
    })
  }

  return (
    <>
      <h2>Posts</h2>
      {renderPostPreviews()}
    </>
  )
}
