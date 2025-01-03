import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { sendToVercelAnalytics } from "./vitals"
import { createGlobalStyle } from "styled-components"
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2"
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2"
/* Pick a theme of your choice */
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
    
  
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals(sendToVercelAnalytics)
