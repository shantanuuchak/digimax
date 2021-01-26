import React from "react"
import Layout from "./src/components/Layout"

// Importing all the JavaScript files
// import "./src/assets/js/jquery/jquery-3.5.1.js"
// import "./src/assets/js/bootstrap/popper.js"
// import "./src/assets/js/bootstrap/bootstrap.js"
// import "./src/assets/js/plugins/plugins.js"
// import "./src/assets/js/active.js"

// Importing all the CSS files
import "./src/assets/css/style.css"
import "./src/assets/css/responsive.css"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
