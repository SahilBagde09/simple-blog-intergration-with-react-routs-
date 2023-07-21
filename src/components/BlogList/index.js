import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props
  return (
    <div className="blog-list-container">
      {blogList.map(eachBlog => (
        <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </div>
  )
}

export default BlogList
