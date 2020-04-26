import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"


const IndexPage = () => {
  // const { allMarkdownRemark } = data
  // const { currentPage, numPages } = pageContext

  return(
  <>
    <Default></Default>
    <BlogList></BlogList>
  </>
  )
}

export default IndexPage