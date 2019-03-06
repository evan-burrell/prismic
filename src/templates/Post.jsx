import React from "react"
import { graphql, Link } from "gatsby"

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <>
      <Link to="/">Home</Link>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        date
        content {
          html
        }
      }
    }
  }
`