import { gql, useQuery } from '@apollo/client'

const GET_POSTS = gql`
  query getPOSTS {
    posts {
      id
      title
      body
      user {
        name
      }
    }
  }
`

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <main>
      {data?.posts?.map(post => (
        <article
          key={post?.id}
          style={{ marginBottom: '1rem', borderBottom: '1px solid black' }}
        >
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
          <p>By: {post?.user?.name}</p>
        </article>
      ))}
    </main>
  )
}

export default Posts
