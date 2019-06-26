import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About Me" />

            <h1>About Me</h1>

            <p>
                I'm a software engineer from Shah and Anchor Kutchhi Engineering
                College
            </p>
            <p>
                Need a developer? <Link to="/contact">Contact me</Link>
            </p>
        </Layout>
    )
}

export default AboutPage
