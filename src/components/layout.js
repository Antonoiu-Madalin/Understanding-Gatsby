import React from "react"
import { Link } from "gatsby"
import TemplateWrap from '../templates/TemplateWrap'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    let header
    header = ( <h1><Link to={`/`} > {title} </Link> </h1>)


    return (

     <TemplateWrap>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </TemplateWrap>
    )
  }
}

export default Layout
