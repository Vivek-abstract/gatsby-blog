import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges

    return (
        <div>
            <Layout>
                <Head title="Blog" />

                <h1>Blog</h1>

                <p>Posts will show up here:</p>
                <ol className={blogStyles.posts}>
                    {posts.map(post => (
                        <li className={blogStyles.post}>
                            <Link to={`blog/${post.node.slug}`}>
                                <h2>{post.node.title}</h2>
                                <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    ))}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage
