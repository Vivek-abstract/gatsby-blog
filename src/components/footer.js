import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {

    var data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>
                Made with ♥ by {data.site.siteMetadata.author} using GatsbyJS
            </p>
        </footer>
    )
}

export default Footer