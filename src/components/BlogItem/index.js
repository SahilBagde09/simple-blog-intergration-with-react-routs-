import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <div className="blog-item-container">
      <div className="post-name-publish">
        <h1 className="post-name">{title}</h1>
        <p className="post-publish">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </div>
  )
}

export default BlogItem
