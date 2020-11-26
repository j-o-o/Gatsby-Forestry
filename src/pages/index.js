import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return <Layout> {data.site.siteMetadata.title} Hello world!</Layout>
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
