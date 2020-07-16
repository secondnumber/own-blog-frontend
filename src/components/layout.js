import React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"
import Nav from "./nav";

const Layout = ({ children }) => {
    return (
        <>
            <Seo />
            <Nav />
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
