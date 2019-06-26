import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact Me" />
            <h1>Contact</h1>

            <p>Ph: 7039715240</p>
            <p>Email: vivekbgawande@gmail.com</p>
            <p>
                Twitter: <a href="https://twitter.com/vivek040997">Click me!</a>
            </p>
        </Layout>
    )
}

export default ContactPage
